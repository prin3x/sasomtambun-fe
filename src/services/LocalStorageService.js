export const setToken = (token, role) => {
  localStorage.setItem('ACCESS_TOKEN', token);
  localStorage.setItem('ROLE', role);
};

export const getToken = () => {
  return {
    token: localStorage.getItem('ACCESS_TOKEN'),
    role: localStorage.getItem('ROLE'),
  };
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
