import React, { Fragment, useContext } from 'react';
import ConfigRoutes from '../config/routes';
import { Redirect, Switch, Route } from 'react-router-dom';
import { UserContext } from '../context/userContext/userContext';
import AdminPage from '../pages/Adminpage';

const PrivateRoutes = () => {
  const { role } = useContext(UserContext);

  const allowedRoutes = ConfigRoutes[role].allowedRoutes;
  const redirectRoutes = ConfigRoutes[role].redirect;

  return (
    <Fragment>
      <Switch>
        {allowedRoutes.map((route) =>
          role === 'User' ? (
            <Route
              exact
              path={route.url}
              key={route.url}
              component={route.component}
            />
          ) : role === 'Admin' ? (
            <AdminPage key={route.url}>
              <Route exact path={route.url} component={route.component} />
            </AdminPage>
          ) : null
        )}
        <Redirect to={redirectRoutes} />
      </Switch>
    </Fragment>
  );
};

export default PrivateRoutes;
