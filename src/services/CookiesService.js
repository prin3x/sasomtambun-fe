import Cookies from 'js-cookie';

export const getCookies = () => {
  return !!Cookies.get('ACCESS_TOKEN');
};

export const setCookies = (token) => {
  console.log(token);
  return Cookies.set('ACCESS_TOKEN', token);
};
