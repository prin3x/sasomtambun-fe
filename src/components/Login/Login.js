import { Form, Input, Button, Checkbox } from 'antd';
import { useContext, useState } from 'react';
import axios from '../../config/axios';
import { useHistory } from 'react-router-dom';
import {
  errorNotification,
  successNotification,
} from '../antdUtils/notification';
import { setToken } from '../../services/LocalStorageService';
import { UserContext } from '../../context/userContext/userContext';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 16 },
};

export const Login = ({ toggleModal }) => {
  const history = useHistory();

  const { loginIntoWebsite } = useContext(UserContext);

  const [submitLoading, setSubmitLoading] = useState(false);
  const onFinish = async (values) => {
    const { username, password } = values;
    try {
      const response = await axios.post('/auth/local', {
        identifier: username,
        password,
      });
      loginIntoWebsite(response.data.jwt);
      setTimeout(() => {
        setSubmitLoading(false);
        successNotification('topRight');
        toggleModal();
        history.push('/home');
      }, 500);
    } catch (error) {
      errorNotification('topRight');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='อีเมล'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='รหัสผ่าน
        '
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit' loading={submitLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
