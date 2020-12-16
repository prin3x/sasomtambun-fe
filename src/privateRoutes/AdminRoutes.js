import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/userContext/userContext';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function AdminRoutes({ component: Component, ...rest }) {
  const { role, loading } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        if (loading) {
          return <Spin indicator={antIcon} />;
        } else if (role === 'Admin') {
          return <Component />;
        }
      }}
    />
  );
}
export default AdminRoutes;
