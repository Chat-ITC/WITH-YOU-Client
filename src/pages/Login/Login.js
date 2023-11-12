//library
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

//components
import TextInput from '../../components/TextInput';
import PWInpit from '../../components/PWInput';
import { setCookie } from '../../utils/Cookies/Cookies';

//style
import {
  LoginHeader,
  LoginContainer,
  Button,
  WrongId,
  LinkBtn,
  TitleContainer,
  SubTitleContainer,
  BottomFix
} from './style';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [wrongId, setWrongId] = useState(' ');
  const isValid = userId !== '' && password !== '';
  const linkStyle = {
    color: '#9A9A9A', // 원하는 글씨 색상
    textDecoration: 'none', // 밑줄 제거
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/member/signin`, {
        userId: userId,
        userPassword: password
      }, {
        withCredentials: true

      });
      console.log('로그인 성공:', response.data);
      const accesstoken = response.headers['accesstoken'];
      //로그인 성공시 화면 전환
      localStorage.setItem('accesstoken', accesstoken);
      /*setCookie("accesstoken", accesstoken, {
        path: '*',
        secure: false
    }) */
      navigate('/home');
    } catch (error) {
      setWrongId("아이디 또는 비밀번호를 잘못 입력했습니다.");
      console.error('로그인 실패:', error);
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginHeader />
        <TitleContainer>WITH-YOU</TitleContainer>
        <SubTitleContainer>당신곁의 공부 도우미</SubTitleContainer>
        <TextInput
          placeholder={"아이디"}
          value={userId}
          onChange={(e) => setUsername(e.target.value)}
        >
        </TextInput>
        <PWInpit
          placeholder={"비밀번호"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
        </PWInpit>
        <WrongId>{wrongId}</WrongId>
        <Button
          disabled={!isValid}
          onClick={handleLogin}>
          로그인
        </Button>
        <LinkBtn>
          <Link to="/join" style={linkStyle}>회원가입</Link>
        </LinkBtn>
        <BottomFix/>
      </LoginContainer>
    </>
  );
}

export default Login;