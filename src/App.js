import React from 'react';
import 'antd/dist/antd.less';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Activities from './pages/Activities';
import Donations from './pages/Donations';
import ActivityPage from './pages/ActivityPage';
import { UserContextProvider } from './context/userContext/userContext';
import PrivateRoutes from './privateRoutes/PrivateRoutes';

export default function App() {
  return (
    <React.Fragment>
      <UserContextProvider>
        <Navbar />
        <Switch>
          <Route exact path='/home'>
            <Homepage />
          </Route>
          <Route exact path='/activities'>
            <Activities />
          </Route>
          <Route exact path='/donations'>
            <Donations />
          </Route>
          <Route exact path='/activities/:id'>
            <ActivityPage />
          </Route>
          <PrivateRoutes />
        </Switch>
      </UserContextProvider>
    </React.Fragment>
  );
}
