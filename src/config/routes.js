import ConfirmTable from '../components/ConfirmTable/ConfirmTable';
import ContentEditor from '../components/ContentEditor/ContentEditor';
import DonationEditor from '../components/ContentEditor/DonationEditor';
import EditHomepage from '../components/ContentEditor/EditHomepage';
import ActContentManager from '../components/ContentManager/ActContentManager';
import DonateContentManager from '../components/ContentManager/DonateContentManager';
import ModifyHomepage from '../components/ContentManager/ModifyHomepage';
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
  activity: {
    url: '/admin/activities',
    component: ActContentManager,
  },
  editActivity: {
    url: '/admin/edit/activity',
    component: ContentEditor,
  },
  donation: {
    url: '/admin/donations',
    component: DonateContentManager,
  },
  editDonation: {
    url: '/admin/edit/donation',
    component: DonationEditor,
  },
  editSingleActivity: {
    url: '/admin/edit/activity/:id',
    component: ContentEditor,
  },
  editSingleDonation: {
    url: '/admin/edit/donation/:id',
    component: DonationEditor,
  },
  confirmTable: {
    url: '/admin/confirm-request',
    component: ConfirmTable,
  },
  modifyHomepage: {
    url: '/admin/modify-homepage',
    component: ModifyHomepage,
  },
  editHomepage: {
    url: '/admin/modify-homepage/:id',
    component: EditHomepage,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Public: {
    allowedRoutes: [components.homepage],
    redirect: '/home',
  },
  User: {
    allowedRoutes: [components.userprofile],
    redirect: '/home',
  },
  Admin: {
    allowedRoutes: [
      components.donation,
      components.activity,
      components.editActivity,
      components.editDonation,
    ],
    redirect: '/admin',
  },
};
