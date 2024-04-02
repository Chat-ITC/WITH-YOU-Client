import axios from 'axios';
import { getCookie } from '../Cookies/Cookies';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_URL,
});

axiosInstance.interceptors.request.use((req) => {
  const accesstoken = localStorage.getItem('accesstoken');
  if (accesstoken) {
    req.headers.authorization = `Bearer ${accesstoken}`;
  } else {
    req.headers.authorization = null;
  } 

  if (req.data instanceof FormData) {
    req.headers['Content-Type'] = 'multipart/form-data';
    req.timeout = 600000;
  } else {
    req.headers['Content-Type'] = 'application/json';
  }

  req.withCredentials = true;
  req.headers['Access-Control-Allow-Origin'] = '*';

  return req;
});

axiosInstance.interceptors.response.use(
  
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      alert("세션이 만료되었습니다. 다시 로그인 해 주세요.");
      window.location.replace("/");
      
    } else if (error.response && error.response.status === 404) {
      // 404 Not Found 에러 처리
    } else if (error.response && error.response.status === 500) {
      // 500 Internal Server Error 에러 처리
    } else {
      // 기타 에러 처리
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
