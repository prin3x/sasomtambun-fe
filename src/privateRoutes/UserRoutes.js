import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useContext } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { UserContext } from '../context/userContext/userContext';
import Homepage from '../pages/Homepage';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function UserRoutes({ component: Component, ...rest }) {
  const { role, loading } = useContext(UserContext);
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={() => {
        if (loading) {
          return <Spin indicator={antIcon} />;
        } else if (role === 'User') {
          return <Component />;
        } else {
          return <Homepage />;
        }
      }}
    />
  );
}
