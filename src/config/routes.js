import Homepage from '../pages/Homepage';
import UserProfilePage from '../pages/UserProfilePage';

const components = {
  homepage: {
    url: '/home',
    component: Homepage,
  },
  userprofile: {
    url: '/profile',
    component: UserProfilePage,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  public: {
    allowedRoutes: [components.homepage],
    redirect: '/home',
  },
  authenticated: {
    allowedRoutes: [components.userprofile],
    redirect: '/home',
  },
};
