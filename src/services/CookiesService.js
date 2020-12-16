import Cookies from 'js-cookie';

export const getCookies = () => {
  return !!Cookies.get('ALWAYS');
};
