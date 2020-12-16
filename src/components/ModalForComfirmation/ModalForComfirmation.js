import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Image, Input, Row, Typography, Form, Modal } from 'antd';
import { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../config/axios';
import { errorNotification } from '../antdUtils/notification';

const ProofWrapper = styled.div`
  margin: 1rem 5rem;
`;

const InfoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #f78f1e;
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .ant-btn {
    margin: 1rem;
  }
`;

export default function ModalForComfirmation({
  image_urls,
  description,
  visible,
  setModalVisible,
  _id,
  user_id,
}) {
  const [remarkModal, setRemarkModal] = useState(false);
  const history = useHistory();
  const handleSuccessPublish = async () => {
    try {
      await axios.patch('/proof', { id: _id, status: 'success', user_id });
      setModalVisible(false);
      history.push(`/admin/confirm-request`);
    } catch (error) {
      errorNotification(error);
    }
  };

  const handleReject = () => {
    setRemarkModal(true);
    setModalVisible(false);
  };

  const onFinishRemark = async (values) => {
    try {
      await axios.patch('/proof', {
        id: _id,
        status: 'rejected',
        user_id,
        remark: values.remark,
      });
      setRemarkModal(false);
    } catch (error) {
      errorNotification(error);
    }
  };

  return (
    <Fragment>
      <Modal
        title='หลักฐาน'
        footer={null}
        onCancel={() => setModalVisible(false)}
        onOk={handleSuccessPublish}
        visible={visible}
        width={'40rem'}
        closeIcon={
          <CloseCircleFilled
            style={{
              color: '#f78f1e',
              fontSize: '3.5rem',
              backgroundColor: '#fff',
              position: 'absolute',
              borderRadius: '50%',
              right: '-25px',
              top: '-20px',
            }}
          />
        }
      >
        <ProofWrapper>
          <Typography.Title level={4}>โครงการ :</Typography.Title>
          <Typography.Title level={5}>รายละเอียด</Typography.Title>
          <InfoWrapper>
            <Typography.Paragraph>{description}</Typography.Paragraph>
          </InfoWrapper>
          <Typography.Title level={5}>รูปภาพหลักฐาน</Typography.Title>
          <InfoWrapper>
            {image_urls
              ? image_urls.map((image) => (
                  <Row
                    key={image}
                    justify='center'
                    style={{ marginBottom: '2rem' }}
                  >
                    <Image width={200} src={image} />
                  </Row>
                ))
              : null}
          </InfoWrapper>
        </ProofWrapper>
        <ButtonWrapper>
          <Button type='danger' onClick={handleReject}>
            Rejected
          </Button>
          <Button type='primary' onClick={handleSuccessPublish}>
            Approve
          </Button>
        </ButtonWrapper>
      </Modal>

      <Modal visible={remarkModal}>
        <Form name='remark-form' onFinish={onFinishRemark} footer={null}>
          <h1>เหตุผลที่ไม่ผ่าน</h1>
          <Form.Item name='remark'>
            <Input.TextArea placeholder='ที่ไม่ผ่าน เนื่องจาก....' />
          </Form.Item>
          <Button onClick={() => setRemarkModal(false)}>Cancel</Button>
          <Button htmlType='submit'>Submit</Button>
        </Form>
      </Modal>
    </Fragment>
  );
}
