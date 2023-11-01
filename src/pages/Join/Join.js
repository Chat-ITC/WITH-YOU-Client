//library
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

//img
import BackButtonImg from "../../assets/right.png";

//components
import TextInput from '../../components/TextInput';
import PWInpit from '../../components/PWInput';
import { MajorSelect, GradeSelect } from '../../components/CustomSelect';

//style
import {
  JoinContainer1,
  JoinHeader,
  BackButton,
  Empty,
  TitleContainer,
  SubTitleContainer,
  Desc,
  Button,
  JoinForm1,
  JoinForm2,

} from './style';


const Join = () => {
  const [userId, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [major, setMajor] = useState('');
  const [grade, setGrade] = useState('');
  const [nickName, setNickName] = useState('');
  // 아이디와 비밀번호 폼의 컨테이너 상태
  const [idpwState, SetIdpwState] = useState(false);
  // 학과학년닉네임 폼의 컨테이너 상태
  const [mgnState, SetMgnState] = useState(false);

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/');
  }

  const isSame = (password === passwordCheck) && password !== '';
  const isValid1 = userId !== '' && password !== '' && passwordCheck !== '' && isSame === true;
  const isValid2 = major !== '' && grade !== '' && nickName !== '';

  //자식에게 학과 받기
  const getMajor = (getMajorData) => {
    setMajor(getMajorData);
  };
  //자식에게 학년 받기
  const getGrade = (getGradeData) => {
    setGrade(getGradeData);
  }

  //다음버튼 동작
  const handleNext = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/member/signup/userId`,null,
        {params: {userId: userId}});
  
      console.log('아이디 중복 없음:', response.data);
      SetIdpwState(!idpwState);
      SetMgnState(!mgnState);
    } catch (error) {
      if(error.response.status === 400){
        alert("동일한 아이디가 존재합니다!");
      }
      console.error('로그인 실패:', error);
    }
    
  };

  //두번째 폼에서 이전 버튼 동작
  const handleJoinBack = () => {
    SetIdpwState(!idpwState);
    SetMgnState(!mgnState);
  }

  //회원가입 통신
  const handleSend = async () => {
    console.log("아이디", userId);
    console.log("비번", password);
    console.log("비번확인", passwordCheck);
    console.log("학과확인", major);
    console.log("학년확인", grade);
    console.log("닉네임확인", nickName);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/member/signup`, {
        userId: userId,
        userPassword: password,
        nickName: nickName,
        major: major,
        grade: grade,
      });
      alert('회원가입이 완료되었습니다.');
      //회원가입 성공
      navigate('/');
    } catch (error) {
      if(error.response.status === 400){
        alert("동일한 닉네임이 존재합니다!");
      }
      console.error('로그인 실패:', error);
    }
  };



  return (
    <>
      <JoinContainer1>
        <JoinHeader />
        <JoinForm1 $done={idpwState}>
          <TitleContainer>
            <BackButton onClick={() => navigateHandler()} src={BackButtonImg} alt="뒤로가기 버튼" />
            WITH-YOU
            <Empty src={BackButtonImg} alt="투명" />
          </TitleContainer>
          <SubTitleContainer>WITH는 회원가입에 필요한<br /> 최소한의 정보만 입력받습니다</SubTitleContainer>
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

          <PWInpit
            placeholder={"비밀번호 확인"}
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          >
          </PWInpit>

          {passwordCheck !== '' && !isSame && (
            <Desc className="repassword">{!isSame ? '비밀번호가 다릅니다.' : ''}
            </Desc>
          )}

          <Button
            disabled={!isValid1}
            onClick={handleNext}>
            다음
          </Button>
        </JoinForm1>

      </JoinContainer1>
      <JoinForm2 $done={mgnState}>
        <TitleContainer>
          <BackButton onClick={handleJoinBack} src={BackButtonImg} alt="뒤로가기 버튼" />
          WITH-YOU
          <Empty src={BackButtonImg} alt="투명" />
        </TitleContainer>
        <SubTitleContainer>선택하신 학과에 기반하여<br /> AI가 더욱 정확한 답변을 해드립니다</SubTitleContainer>
        <MajorSelect
          onDataMajor={getMajor} />
        <GradeSelect
          onDataGrade={getGrade} />

        <TextInput
          placeholder={"닉네임"}
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        >
        </TextInput>
        <Button
          disabled={!isValid2}
          onClick={handleSend}>
          회원가입
        </Button>
      </JoinForm2>
    </>
  );
}

export default Join;