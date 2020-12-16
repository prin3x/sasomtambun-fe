import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/userContext/userContext';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function UserRoutes({ component: Component, ...rest }) {
  const { role, loading } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        if (loading) {
          return <Spin indicator={antIcon} />;
        } else if (role === 'User') {
          return <Component />;
        } else {
          return <Redirect to='/home' />;
        }
      }}
    />
  );
}
