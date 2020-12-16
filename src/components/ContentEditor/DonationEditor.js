import { Col, Input, Row, Form, Button, DatePicker } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ButtonStyle,
  ContentEditorFlexWrapper,
  dateFormat,
  formItemLayout,
  Heading,
} from '../styled-components/utilities';
import UploadPictures from '../UploadPictures/UploadPictures';
import moment from 'moment';
import axios from '../../config/axios';
import { useHistory, useParams } from 'react-router-dom';
import {
  successNotification,
  errorNotification,
} from '../antdUtils/notification';
import UploadSingle from '../UploadPictures/UploadSingle';

const InputWrapper = styled.div`
  width: 30rem;
`;

export default function DonationEditor(props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [subImageUrls, setSubImageUrls] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const preventUnintendedSubmit = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    if (id) {
      (async function () {
        const { data } = await axios.get(`/donation/${id}`);
        const {
          content,
          expiry_date,
          target_points,
          short_desc,
          title,
          main_image_url,
          sub_image_urls,
        } = data;
        form.setFieldsValue({
          title,
          content,
          target_points,
          short_desc,
          expiry_date: moment(expiry_date),
        });
        setMainImage(main_image_url);
        setSubImageUrls(sub_image_urls.length ? sub_image_urls : null);
        return;
      })();
    }

    return;
  }, [id, form]);

  const handleSubmit = async (values) => {
    const { content, expiry_date, target_points, short_desc, title } = values;

    try {
      const result = id
        ? await axios.patch(`/donation/${id}`, {
            content,
            expiry_date: moment(expiry_date).format(dateFormat),
            target_points,
            short_desc,
            title,
            main_image_url: mainImage,
            sub_image_urls: subImageUrls,
          })
        : await axios.post('/donation/create', {
            content,
            expiry_date: moment(expiry_date).format(dateFormat),
            target_points,
            short_desc,
            title,
            main_image_url: mainImage,
            sub_image_urls: subImageUrls,
          });
      if (result.status === 201) {
        history.push('/admin/donations');
        successNotification();
      } else {
        errorNotification();
      }
    } catch (error) {
      errorNotification(error);
    }
  };

  const handleSuccessPublish = async () => {
    form.submit();
  };

  return (
    <Fragment>
      <ContentEditorFlexWrapper>
        <Heading color='#f78f1e'>จัดการคอนเทนท์โครงการ</Heading>
        <Form
          form={form}
          name='edit_content'
          {...formItemLayout}
          onFinish={handleSubmit}
        >
          <Row gutter={[50, 10]}>
            <Col>
              <InputWrapper>
                <Form.Item
                  name='title'
                  label='ชื่อโครงการ'
                  rules={[
                    {
                      required: true,
                      message: 'อย่าลืมใส่ชื่อโครงการด้วยนะครับ',
                    },
                  ]}
                >
                  <Input placeholder='เช่น บริจาคขวดเพื่อการกุศล' />
                </Form.Item>
              </InputWrapper>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <InputWrapper>
                <Form.Item
                  name='target_points'
                  label='เป้าหมาย/Points'
                  rules={[
                    {
                      required: true,
                      message: 'อย่าลืมใส่เป้าหมายด้วยนะครับ',
                    },
                  ]}
                >
                  <Input placeholder='100' />
                </Form.Item>
              </InputWrapper>
            </Col>
            <Col>
              <InputWrapper>
                <Form.Item
                  name='expiry_date'
                  label='วันที่สิ้นสุดโครงการ'
                  rules={[
                    {
                      required: true,
                      message: 'อย่าลืมเลือกวันที่โครงการจะสิ้นสุดด้วยนะครับ',
                    },
                  ]}
                >
                  <DatePicker format={dateFormat} />
                </Form.Item>
              </InputWrapper>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <Form.Item
                name='main_image_url'
                label='ภาพหลักโครงการ(สำหรับแสดงในหน้าโฮมเพจ)'
              >
                <UploadSingle
                  mainImage={mainImage}
                  setMainImage={setMainImage}
                  route={'donation'}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <Form.Item
                name='short_desc'
                label='คำโปรย (สำหรับแสดงในหน้าโฮมเพจ)'
                required
              >
                <Input.TextArea placeholder='เชิญร่วมโครงการนี้' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <Form.Item
                name='sub_image_urls'
                label='ภาพโครงการ (สำหรับแสดงในหน้ารายละเอียด สูงสุด 5 ภาพ)'
              >
                <UploadPictures
                  subImageUrls={subImageUrls}
                  setSubImageUrls={setSubImageUrls}
                  route={'donation'}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <Form.Item name='content' label='รายละเอียดโครงการ' required>
                <Input.TextArea placeholder='' className='desc_textarea' />
              </Form.Item>
            </Col>
          </Row>
          <Row justify='end'>
            <Modal
              title='Title'
              onCancel={() => setModalVisible(false)}
              visible={modalVisible}
              onOk={() => form.submit()}
            >
              <p>Sure?</p>
            </Modal>

            <Button
              type='text'
              style={{ ...ButtonStyle, background: '#f78f1e' }}
              onClick={preventUnintendedSubmit}
            >
              เผยแพร่
            </Button>
          </Row>
        </Form>
      </ContentEditorFlexWrapper>
    </Fragment>
  );
}
