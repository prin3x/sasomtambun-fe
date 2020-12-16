import { Modal, Form, InputNumber, Button, Result } from 'antd';
import axios from '../../config/axios';
import { Fragment, useState } from 'react';

import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { CloseCircleOutlined, SmileOutlined } from '@ant-design/icons';
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default function DonateModal({ pop, setPop }) {
  const [form] = useForm();
  const { id } = useParams();
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [failureSubmit, setFailureSubmit] = useState(false);
  const history = useHistory();

  function handleError(message) {
    Modal.error({
      title: 'Error Unauthorized',
      icon: <CloseCircleOutlined />,
      content: message,
      okText: 'Ok',
    });
  }

  const handleSubmit = async (values) => {
    try {
      const result = await axios.post(`/donate/${id}`, values);
      if (result.status === 200) {
        setPop(false);
        setSuccessSubmit(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      handleError(error.response.message);
      setSuccessSubmit(false);
      setTimeout(() => {
        setFailureSubmit(false);
      }, 1000);
    }
  };

  form.setFieldsValue({
    donate_points: 50,
  });

  return (
    <Fragment>
      <Modal
        visible={pop}
        title='บริจาค'
        footer={null}
        onCancel={() => setPop(false)}
      >
        <SelectWrapper>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item name='donate_points' label='Points'>
              <InputNumber min={10} max={10000} />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </SelectWrapper>
      </Modal>
      <Modal visible={successSubmit} footer={null}>
        <Result
          icon={<SmileOutlined />}
          title='Great, we have done all the operations!'
          subTitle='This is text'
        />
        ,
      </Modal>
    </Fragment>
  );
}
