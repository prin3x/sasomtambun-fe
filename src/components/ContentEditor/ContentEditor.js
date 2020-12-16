import { Col, Input, Row, Form, Radio, Button, Select, DatePicker } from 'antd';
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
const { Option } = Select;

const InputWrapper = styled.div`
  width: 30rem;
`;

export default function ContentEditor() {
  const [form] = Form.useForm();
  const [mainImage, setMainImage] = useState('');
  const [subImageUrls, setSubImageUrls] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const [status, setStatus] = useState('กำลังดำเนินการ');

  const preventUnintendedSubmit = () => {
    setModalVisible(true);
  };

  const handleSubmit = async (values) => {
    const {
      category,
      content,
      expiry_date,
      given_points,
      short_desc,
      title,
      status,
    } = values;
    try {
      const result = id
        ? await axios.patch(`/activity/${id}`, {
            category,
            content,
            expiry_date,
            given_points,
            short_desc,
            title,
            status,
            main_image_url: mainImage,
            sub_image_urls: subImageUrls,
          })
        : await axios.post('/activity/create', {
            category,
            content,
            expiry_date,
            given_points,
            short_desc,
            title,
            status,
            main_image_url: mainImage,
            sub_image_urls: subImageUrls,
          });
      if (result.status === 201) {
        history.push('/admin/activities');
        successNotification();
      } else {
        errorNotification(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      (async function () {
        const { data } = await axios.get(`/activity/${id}`);
        const {
          category,
          content,
          expiry_date,
          given_points,
          short_desc,
          title,
          main_image_url,
          sub_image_urls,
          status,
        } = data;
        form.setFieldsValue({
          title,
          content,
          category,
          given_points,
          short_desc,
          expiry_date: moment(expiry_date),
          status,
        });
        setMainImage(main_image_url);
        setSubImageUrls(sub_image_urls);
        return;
      })();
    }

    return;
  }, [id, form]);

  return (
    <Fragment>
      <ContentEditorFlexWrapper>
        <Heading color='#f78f1e'>จัดการคอนเทนท์กิจกรรม</Heading>
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
                  label='ชื่อกิจกรรม'
                  rules={[
                    {
                      required: true,
                      message: 'อย่าลืมใส่ชื่อกิจกรรมด้วยนะครับ',
                    },
                  ]}
                >
                  <Input placeholder='เช่น ยิ้มปันสุข' />
                </Form.Item>
              </InputWrapper>
            </Col>
            <Col>
              <InputWrapper>
                <Form.Item
                  name='category'
                  label='ประเภทกิจกรรม'
                  rules={[
                    {
                      required: true,
                      message: 'อย่าลืมเลือกประเภทกิจกรรมด้วยนะครับ',
                    },
                  ]}
                >
                  <Select
                    showSearch
                    style={{ width: '100%', borderRadius: '2px' }}
                    placeholder='Search to Select'
                    optionFilterProp='children'
                  >
                    <Option value='บริจาค'>บริจาค</Option>
                    <Option value='สุขภาพ'>สุขภาพ</Option>
                    <Option value='ความรู้'>ความรู้</Option>
                    <Option value='เป้าหมาย_7_วัน'>เป้าหมาย 7 วัน</Option>
                    <Option value='csc_project'>csc_project</Option>
                  </Select>
                </Form.Item>
              </InputWrapper>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <InputWrapper>
                <Form.Item
                  name='expiry_date'
                  label='วันที่สิ้นสุดกิจกรรม'
                  rules={[
                    {
                      required: true,
                      message: 'อย่าลืมเลือกวันที่กิจกรรมจะสิ้นสุดด้วยนะครับ',
                    },
                  ]}
                >
                  <DatePicker format={dateFormat} />
                </Form.Item>
              </InputWrapper>
            </Col>
            <Col>
              <InputWrapper>
                <Form.Item
                  name='given_points'
                  label='รางวัล/Point'
                  rules={[
                    {
                      required: true,
                      message: 'อย่าลืมใส่จำนวนคะแนนที่จะได้รับด้วยนะครับ',
                    },
                  ]}
                >
                  <Input placeholder='100' />
                </Form.Item>
              </InputWrapper>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <Form.Item
                name='main_image_url'
                label='ภาพหลักกิจกรรม(สำหรับแสดงในหน้าโฮมเพจ)'
              >
                <UploadSingle
                  mainImage={mainImage}
                  setMainImage={setMainImage}
                  route={'activity'}
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
                <Input.TextArea placeholder='เชิญร่วมกิจกรรมนี้' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <Form.Item
                name='sub_image_urls'
                label='ภาพกิจกรรม (สำหรับแสดงในหน้ารายละเอียด สูงสุด 5 ภาพ)'
              >
                <UploadPictures
                  subImageUrls={subImageUrls}
                  setSubImageUrls={setSubImageUrls}
                  route={'activity'}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[50, 10]}>
            <Col>
              <Form.Item name='content' label='รายละเอียดกิจกรรม' required>
                <Input.TextArea placeholder='' className='desc_textarea' />
              </Form.Item>
            </Col>
          </Row>

          <Row
            gutter={[50, 10]}
            style={{ display: `${id ? 'block' : 'none'}` }}
          >
            <Col>
              <Form.Item name='status' label='สถานะกิจกรรม' required>
                <Radio.Group value={status} buttonStyle={'solid'}>
                  <Radio.Button type='primary' value='กำลังดำเนินการ'>
                    กำลังดำเนินการ
                  </Radio.Button>
                  <Radio.Button type='primary' value='สิ้นสุดกิจกรรม'>
                    สิ้นสุดกิจกรรม
                  </Radio.Button>
                </Radio.Group>
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
              htmlType='submit'
            >
              เผยแพร่
            </Button>
          </Row>
        </Form>
      </ContentEditorFlexWrapper>
    </Fragment>
  );
}
