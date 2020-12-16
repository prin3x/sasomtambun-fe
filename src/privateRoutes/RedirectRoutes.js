import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/userContext/userContext';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function RedirectRoutes({ Component, ...rest }) {
  const { role, loading } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        if (loading) {
          return <Spin indicator={antIcon} />;
        } else if (role === 'Admin') {
          return <Redirect to='/admin/activities' />;
        } else if (role === 'User' || role === 'Public') {
          return <Redirect to='/home' />;
        }
      }}
    />
  );
}
