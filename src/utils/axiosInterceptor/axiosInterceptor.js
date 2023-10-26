import axios from 'axios';
import { getCookie } from '../Cookies/Cookies';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_URL,
});

axiosInstance.interceptors.request.use((req) => {
  const accesstoken = getCookie('accesstoken');
  
  if (accesstoken) {
    req.headers.authorization = `Bearer ${accesstoken}`;
  } else {
    req.headers.authorization = null;
  } 

  if (req.data instanceof FormData) {
    req.headers['Content-Type'] = 'multipart/form-data';
  } else {
    req.headers['Content-Type'] = 'application/json';
  }

  req.withCredentials = true;
  req.headers['Access-Control-Allow-Origin'] = '*';

  return req;
});

export default axiosInstance;
