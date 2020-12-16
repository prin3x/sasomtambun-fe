import React, { useContext, useState } from 'react';
import { Form, Input, Tooltip, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './Register.less';
import axios from '../../config/axios';
import {
  errorNotification,
  successNotification,
} from '../antdUtils/notification';
import { setToken } from '../../services/LocalStorageService';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/userContext/userContext';

const formItemLayout = {
  labelAlign: 'left',
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const RegistrationForm = ({ toggleModal }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [submitLoading, setSubmitLoading] = useState(false);
  const { retrieveUserInfo } = useContext(UserContext);

  const onFinish = async (values) => {
    setSubmitLoading(true);

    try {
      const { data } = await axios.post(
        '/auth/register',
        {
          ...values,
        },
        { credentials: true }
      );
      setToken(data.token);
      retrieveUserInfo();
      setTimeout(() => {
        setSubmitLoading(false);
        successNotification(data.message);
        toggleModal();
        history.push('/home');
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setSubmitLoading(false);
        errorNotification(error);
      }, 500);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name='email'
        label='อีเมล'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder='homeshopping@homeshoppping.com' />
      </Form.Item>

      <Form.Item
        name='password'
        label='รหัสผ่าน'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder='รหัสผ่าน' />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='ยืนยันรหัสผ่าน'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                'The two passwords that you entered do not match!'
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder='ยืนยันรหัสผ่าน' />
      </Form.Item>

      <Form.Item
        name='fname'
        label={
          <span>
            ชื่อ&nbsp;
            <Tooltip title='What do you want others to call you?'>
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder='ชื่อ' />
      </Form.Item>
      <Form.Item
        name='lname'
        label={
          <span>
            นามสกุล&nbsp;
            <Tooltip title='What do you want others to call you?'>
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder='นามสกุล' />
      </Form.Item>

      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input placeholder='เบอร์โทร' style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name='department'
        label='Department'
        rules={[{ required: true, message: 'Please input your department!' }]}
      >
        <Input placeholder='แผนก' style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' loading={submitLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
