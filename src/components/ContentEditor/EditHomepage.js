import { Input, Typography, Form, Upload, message, Row, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../config/axios';
import { ButtonStyle } from '../styled-components/utilities';
import { errorNotification } from '../antdUtils/notification';
import { SketchPicker } from 'react-color';
import SketchPickerCom from '../SketchPickerCom/SketchPicker';

const ContentEditorFlexWrapper = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  .ant-input {
    border-radius: 2px;
  }

  .upload-desktop-image {
    div.ant-upload {
      width: calc(15rem * 1.5);
      height: 15rem;
    }
  }
  .upload-tablet-image {
    div.ant-upload {
      width: calc(10rem * 1.5);
      height: 10rem;
    }
  }
  .upload-mobile-image {
    div.ant-upload {
      width: calc(7.5rem * 1.5);
      height: 7.5rem;
    }
  }
`;

const BannerWrapper = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const formItemLayout = {
  labelAlign: 'left',
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function checkFileExtendsionAndSize(file) {
  const isValidType = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isValidType) message.error('สามารถอัพโหลดได้เฉพาะไฟล์ JPG/PNG เท่านั้น');
  const isOffLimited = file.size / 1024 / 1024 < 2;
  if (!isOffLimited) message.error('อัพโหลดได้ไม่เกิน 2mb เท่านั้น');
  return isValidType && isOffLimited;
}

export default function EditHomepage() {
  const [carouselContent, setCarouselContent] = useState();
  const [desktopImage, setDesktopImage] = useState();
  const [tabletImage, setTabletImage] = useState();
  const [mobileImage, setMobileImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [successPublish, setSuccessPublish] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [form] = Form.useForm();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      (async function () {
        const { data } = await axios.get(`/homepage/${id}`);
        setCarouselContent(data);
        const {
          title,
          url,
          image_desktop_url,
          image_tablet_url,
          image_mobile_url,
          color,
        } = data;
        form.setFieldsValue({
          title,
          url,
          image_desktop_url,
          image_tablet_url,
          image_mobile_url,
        });
        setDesktopImage(image_desktop_url);
        setTabletImage(image_tablet_url);
        setMobileImage(image_mobile_url);
        setBackgroundColor(color);
        return;
      })();
    }

    return;
  }, [id, form]);

  const preventUnintendedSubmit = () => {
    setModalVisible(true);
  };

  const handleUpload = (info, setState) => {
    if (info.file.status === 'uploading') return;
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, setState);
    }
  };

  const handleSuccessPublish = async () => {
    form.submit();
    setModalVisible(false);
    setSuccessPublish(true);
    setTimeout(() => {
      history.push('/admin/homepage');
    }, 2000);
  };

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleSubmit = async (values) => {
    const {
      title,
      url,
      image_desktop_url,
      image_mobile_url,
      image_tablet_url,
    } = values;

    try {
      id
        ? await axios.patch(`/homepage/${id}`, {
            title,
            url,
            color: backgroundColor,
            image_desktop_url:
              image_desktop_url?.file?.response || image_desktop_url,
            image_tablet_url:
              image_tablet_url?.file?.response || image_tablet_url,
            image_mobile_url:
              image_mobile_url?.file?.response || image_mobile_url,
          })
        : await axios.post('/homepage/create', {
            title,
            url,
            color: backgroundColor,
            image_desktop_url: image_desktop_url.file.response,
            image_tablet_url: image_tablet_url.file.response,
            image_mobile_url: image_mobile_url.file.response,
          });
    } catch (error) {
      console.log(error);
      errorNotification(error);
    }
  };
  return (
    <ContentEditorFlexWrapper>
      <Typography.Title level={1}>จัดการหน้าแรก</Typography.Title>
      <Form
        form={form}
        {...formItemLayout}
        name='edit-homepage'
        onFinish={handleSubmit}
      >
        <Form.Item label='ชื่อกิจกรรม' name='title'>
          <Input />
        </Form.Item>
        <Form.Item label='URL กิจกรรม' name='url'>
          <Input />
        </Form.Item>
        <Form.Item
          label='ภาพแบนเนอร์สำหรับแสดงในหน้าจอขนาดใหญ่ (เดสก์ท็อป )'
          name='image_desktop_url'
        >
          <Upload
            name='homepic'
            listType='picture-card'
            showUploadList={false}
            action='http://localhost:4321/upload/homepic'
            method='post'
            beforeUpload={checkFileExtendsionAndSize}
            onChange={(info) => handleUpload(info, setDesktopImage)}
            className='upload-desktop-image'
          >
            {desktopImage ? (
              <BannerWrapper src={desktopImage} alt='desktopImage' />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          label='ภาพแบนเนอร์สำหรับแสดงในหน้าจอขนาดกลาง (แล็บท็อป)'
          name='image_tablet_url'
        >
          <Upload
            name='homepic'
            listType='picture-card'
            showUploadList={false}
            action='http://localhost:4321/upload/homepic'
            method='post'
            beforeUpload={checkFileExtendsionAndSize}
            onChange={(info) => handleUpload(info, setTabletImage)}
            className='upload-tablet-image'
          >
            {tabletImage ? (
              <BannerWrapper src={tabletImage} alt='tabletImage' />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          label='ภาพแบนเนอร์สำหรับแสดงในหน้าจอขนาดเล็ก (มือถือ)'
          name='image_mobile_url'
        >
          <Upload
            name='homepic'
            listType='picture-card'
            showUploadList={false}
            action='http://localhost:4321/upload/homepic'
            method='post'
            beforeUpload={checkFileExtendsionAndSize}
            onChange={(info) => handleUpload(info, setMobileImage)}
            className='upload-mobile-image'
          >
            {mobileImage ? (
              <BannerWrapper src={mobileImage} alt='mobileImage' />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item name='color' label='เลือกสีเพื่อเป็นพื้นหลังของภาพทั้งหมด'>
          <SketchPickerCom
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
          />
        </Form.Item>
        <Row justify='end'>
          <Modal
            title='Title'
            onCancel={() => setModalVisible(false)}
            onOk={handleSuccessPublish}
            visible={modalVisible}
          >
            <p>Sure?</p>
          </Modal>
          <Modal title='Title' footer={null} visible={successPublish}>
            <p>Sure?</p>
          </Modal>
          <Form.Item>
            <Button
              style={{ ...ButtonStyle, background: '#f78f1e' }}
              onClick={preventUnintendedSubmit}
            >
              เผยแพร่
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </ContentEditorFlexWrapper>
  );
}
