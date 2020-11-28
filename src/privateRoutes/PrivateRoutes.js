import React, { useContext } from 'react';
import ConfigRoutes from '../config/routes';
import { Redirect, Switch, Route } from 'react-router-dom';
import { UserContext } from '../context/userContext/userContext';

const PrivateRoutes = () => {
  const { role } = useContext(UserContext);

  const allowedRoutes = ConfigRoutes[role].allowedRoutes;
  const redirectRoutes = ConfigRoutes[role].redirect;

  return (
    <Switch>
      {allowedRoutes.map((route) => (
        <Route exact path={route.url} key={route.url}>
          <route.component />
        </Route>
      ))}
      <Redirect to={redirectRoutes} />
    </Switch>
  );
};

export default PrivateRoutes;
