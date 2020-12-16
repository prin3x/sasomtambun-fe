import 'antd/dist/antd.less';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Activities from './pages/Activities';
import Donations from './pages/Donations';
import ActivityPage from './pages/ActivityPage';
import UserProfilePage from './pages/UserProfilePage';
import AdminRoutes from './privateRoutes/AdminRoutes';
import UserRoutes from './privateRoutes/UserRoutes';
import { Fragment } from 'react';
import SingleDonationPage from './pages/SingleDonationPage';
import AdminPage from './pages/Adminpage';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Homepage} />
        <Route exact path='/activities' component={Activities} />
        <Route exact path='/donations' component={Donations} />
        <Route exact path='/activities/:id' component={ActivityPage} />
        <Route exact path='/donations/:id' component={SingleDonationPage} />
        <UserRoutes exact path='/profile' component={UserProfilePage} />
        <AdminRoutes path='/admin' component={AdminPage} />
        <Route path='*'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Fragment>
  );
}
export default App;
