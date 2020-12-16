export const setToken = (token) => {
  return localStorage.setItem('ACCESS_TOKEN', token);
};

export const getToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

export const removeToken = () => {
  localStorage.clear();
};

export const getRole = () => {
  const { token, role } = getToken();
  if (token) {
    return role;
  }

  return 'Public';
};

export const checkRole = (user) => {
  const { isAdmin } = user;
  if (isAdmin) return 'Admin';
  return 'User';
};
