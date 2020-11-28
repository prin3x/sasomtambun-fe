import { createContext, useReducer, useEffect } from 'react';
import UserReducer from './userReducer';
import axios from '../../config/axios';
import {
  removeToken,
  getRole,
  setToken,
  getToken,
} from '../../services/LocalStorageService';
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [role, dispatch] = useReducer(UserReducer, 'public');
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'RETRIEVE_USER_STATUS',
      payload: getRole(),
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: 'RETRIEVE_USER_STATUS',
      payload: getRole(),
    });
  }, [role]);

  const logoutFronWebsite = () => {
    removeToken();
    dispatch({
      type: 'RETRIEVE_USER_STATUS',
      payload: getRole(),
    });
    history.push('/home');
  };

  const loginIntoWebsite = (token) => {
    setToken(token);
    dispatch({
      type: 'RETRIEVE_USER_STATUS',
      payload: getRole(),
    });
    history.push('/home');
  };

  return (
    <UserContext.Provider value={{ role, logoutFronWebsite, loginIntoWebsite }}>
      {children}
    </UserContext.Provider>
  );
}
