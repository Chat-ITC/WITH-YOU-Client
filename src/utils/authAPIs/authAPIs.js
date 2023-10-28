import axios from 'axios';
import axiosInstance from '../axiosInterceptor/axiosInterceptor'

// export const requestHistory = async () => {
//     try {
//       const response = await axiosInstance.get('/question/list');
//       setCameraListData(response.data);
//     }
//     catch(error) {
//       console.log(error);
//     }
//   }