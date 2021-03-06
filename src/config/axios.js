import axios from 'axios';
import { getToken } from '../services/LocalStorageService';
import { BASE_BACKEND_URL } from './constants';

axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
  if (config.url.match(/ \/login|\/register /)) return config;

  const token = getToken();

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default axios;
