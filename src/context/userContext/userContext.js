import { createContext, useEffect, useState } from 'react';

import axios from '../../config/axios';
import { getCookies } from '../../services/CookiesService';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [role, setRole] = useState('Public');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      if (getCookies()) {
        try {
          const { data } = await axios.get('/auth');
          setUserInfo(data);
          setRole(data.isAdmin ? 'Admin' : 'User');
          setLoading(false);
        } catch (error) {
          setRole('Public');
          setLoading(false);
          return;
        }
      } else {
        return;
      }
    })();

    return;
  }, []);

  async function retrieveUserInfo() {
    try {
      const { data } = await axios.get('/auth');
      return data;
    } catch (error) {
      return 'Public';
    }
  }

  async function logoutFromWebsite() {
    try {
      await axios.get('/auth/logout');
      setUserInfo('Public');
      window.location.reload();
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
