//library
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import { getCookie } from '../../utils/Cookies/Cookies';

const Mypage = () => {
  const [nickName, setNickName] = useState('');



  const handleChangeNickName = async () => {
    const name = { nickName: nickName };
    try {
      const response = await axiosInstance.patch('/member/update', name);
      console.log('닉네임 변경 성공:', response.data);
   
    } catch (error) {
      console.error('닉네임 변경 실패:', error);
    }
  };
  return (
    <>
      <TextInput
        placeholder={"닉네임"}
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />

      <button
        onClick={handleChangeNickName}>
        변경
      </button>
    </>
  );
}

export default Mypage;