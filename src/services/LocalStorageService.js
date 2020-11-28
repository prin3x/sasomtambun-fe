export const setToken = (token) => {
  localStorage.setItem('ACCESS_TOKEN', token);
};

export const getToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

export const removeToken = () => {
  localStorage.clear();
};

export const getRole = () => {
  if (getToken()) {
    return 'authenticated';
  }
  return 'public';
};
