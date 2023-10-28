//style
import {
  MyPageHeader,
  TopEmptyBox,
  MypageHeader,
  UserInfoContainer,
  UserContainer,
  UserLevelBox,
  UserInfo,
  UserCrownBox,
  UsernickBox,
  MyPageImg,
  UserNick,
  UserLevel,
  ImgText,
  MyPageList,
  ListBtn,
  Ul,
} from './style';
//library
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
import { useNavigate } from "react-router-dom";

import TextInput from '../../components/TextInput';
import { getCookie } from '../../utils/Cookies/Cookies';
//img
import userInfo from '../../assets/userInfo.png';
import nameChange from '../../assets/nameChange.png';
import inquiry from '../../assets/inquiry.png';
import logout from '../../assets/logout.png';

const Mypage = () => {
  const navigate = useNavigate();
  const sampleJson = [
    {
      id: "1",
      nickname: "감흥없는 김밥",
      major: "의료IT공학과",
      grade: 3,
      level: 36,
      levelgage: 80,
    },
  ];
  const [nickName, setNickName] = useState('');

  //logout
  function Logout(){
    console.log("로그아웃");
  }

  const handleChangeNickName = async () => {
    const name = { nickName: nickName };
    try {
      await axiosInstance.patch('/member/update', name);
      alert("닉네임이 성공적으로 변경되었습니다.");

    } catch (error) {
      alert("세션이 만료되었습니다. 다시 로그인해 주세요");
      navigate("/");      
    }
  };
  return (
    <MypageHeader>
      <MyPageHeader>My Page</MyPageHeader>
      <TopEmptyBox/>
        <UserInfoContainer>
            <UserContainer>
              <MyPageImg>
                <img src={userInfo} alt="" />
              </MyPageImg>
                <UserInfo>
                  <UsernickBox>
                  <UserCrownBox>
                    <img src={userInfo} alt="" width="25"/>
                  </UserCrownBox>
                  <UserNick>
                    감흥없는 김밥
                  </UserNick>
                  </UsernickBox>  
                  <div>
                    의료IT공학과 3학년
                  </div>
                </UserInfo> 
            </UserContainer>
            <UserLevelBox>
              <UserLevel>Lv.35</UserLevel>
              <progress value="70" min="0" max="100"></progress>
            </UserLevelBox>
        </UserInfoContainer>
      <Ul>
        <MyPageList>
          <MyPageImg>
            <img src={nameChange} alt="닉네임 설정" />
          </MyPageImg>
          <ListBtn>
            <ImgText>닉네임 설정</ImgText>
          </ListBtn>
        </MyPageList>
        <MyPageList>
          <MyPageImg>
            <img src={inquiry} alt="문의하기" />
          </MyPageImg>
          <ListBtn>
            <ImgText>문의하기</ImgText>
          </ListBtn>
        </MyPageList>
        <MyPageList onClick={Logout}>
          <MyPageImg>
            <img src={logout} alt="로그아웃" />
          </MyPageImg>
          <ListBtn>
            <ImgText>로그아웃</ImgText>
          </ListBtn>
        </MyPageList>
      </Ul>
      <TextInput
        placeholder={"닉네임"}
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />

      <button
        onClick={handleChangeNickName}>
        변경
      </button>
    </MypageHeader>
  );
}

export default Mypage;