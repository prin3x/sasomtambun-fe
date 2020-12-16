import React from 'react';
import { Modal, Typography, Tabs } from 'antd';
import { Title } from '../styled-components/utilities';
import { Login } from '../Login/Login';
import RegistrationForm from '../Register/Register';
import './LoginRegister.less';
import { CloseCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';

const { TabPane } = Tabs;

export default function LoginRegister({ type }) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  function callback(key) {
    console.log(key);
  }

  return (
    <section className='ghost'>
      <Typography.Text onClick={toggleModal}>{type}</Typography.Text>
      <Modal
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        maskClosable={true}
        footer={null}
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
        <Tabs
          defaultActiveKey={type === 'สมัครสมาชิก' ? 2 : 1}
          onChange={callback}
          centered
          tabBarGutter={0}
          size='large'
        >
          <TabPane
            style={{ marginRight: '0' }}
            tab={<Title color={'#FB9A2B'}>เข้าสู่ระบบ</Title>}
            key='1'
          >
            <Login toggleModal={toggleModal} />
          </TabPane>{' '}
          <TabPane tab={<Title color={'#FB9A2B'}>สมัครสมาชิก</Title>} key='2'>
            <RegistrationForm toggleModal={toggleModal} />
          </TabPane>{' '}
        </Tabs>
      </Modal>
    </section>
  );
}
