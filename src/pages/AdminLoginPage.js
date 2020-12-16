import { Form, Input, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from '../config/axios';
import { Fragment, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  errorNotification,
  successNotification,
} from '../components/antdUtils/notification';
import { UserContext } from '../context/userContext/userContext';

const FormContainer = styled.div`
  padding-top: 10rem;
`;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 13, span: 11 },
};

export default function AdminLoginPage() {
  const { loginIntoWebsite } = useContext(UserContext);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [form] = useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      const { data } = await axios.post('/auth/login', {
        email,
        password,
      });
      const { role, token } = data;
      loginIntoWebsite(token, role);
      setTimeout(() => {
        setSubmitLoading(false);
        successNotification(
          "You've successfully logged into the website as an admin"
        );
        history.push('/admin/activities');
      }, 500);
    } catch (error) {
      errorNotification('Sorry, Your username or password is incorrect');
    }
  };
  return (
    <FormContainer>
      <Form form={form} onFinish={onFinish} {...layout}>
        <Form.Item
          name='email'
          label='Email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='ghost' style={{ marginRight: '1rem' }}>
            Reset
          </Button>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
}
