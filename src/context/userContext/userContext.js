import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from '../../config/axios';
import { getCookies } from '../../services/CookiesService';
import { getToken, removeToken } from '../../services/LocalStorageService';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [role, setRole] = useState('Public');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (getToken()) {
      (async function () {
        try {
          const { data } = await axios.get('/auth', { credentials: true });
          setUserInfo(data);
          setRole(data.isAdmin ? 'Admin' : 'User');
          setLoading(false);
        } catch (error) {
          setRole('Public');
          setLoading(false);
          return;
        }
      })();
    } else {
      return;
    }

    return;
  }, []);

  async function retrieveUserInfo() {
    try {
      const { data } = await axios.get('/auth', { credentials: true });
      setUserInfo(data);
      setRole(data.isAdmin ? 'Admin' : 'User');
      setLoading(false);
    } catch (error) {
      setRole('Public');
      setLoading(false);
      return;
    }
  }

  async function logoutFromWebsite() {
    try {
      removeToken();
      setRole('Public');
      history.push('/home');
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <UserContext.Provider
      value={{
        retrieveUserInfo,
        userInfo,
        logoutFromWebsite,
        setUserInfo,
        role,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
