//style
import {
  MyPageHeader,
  TopEmptyBox,
  MypageHeader,
  UserInfoContainer,
  UserContainer,
  UserInfo,
  UserLevelBox,
  DepartGradeBox,
  UsernickBox,
  MyPageImg,
  UserNick,
  ImgText,
  MyPageList,
  ListBtn,
  Ul,
} from './style';
//library
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';

import TextInput from '../../components/TextInput';
import { getCookie } from '../../utils/Cookies/Cookies';
//img
import userInfo from '../../assets/userInfo.png';
import nameChange from '../../assets/nameChange.png';
import inquiry from '../../assets/inquiry.png';
import logout from '../../assets/logout.png';

const Mypage = () => {

  const sampleJson = [
    {
      id: "1",
      nickname: "감흥없는 김밥",
      department: "의료IT공학과",
      grade: 3,
      level: 36,
      levelgage: 80,
    },
  ];
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
                  <UserLevelBox>
                    <img src={userInfo} alt="" width="25"/>
                  </UserLevelBox>
                  <UserNick>
                    감흥없는 김밥
                  </UserNick>
                  </UsernickBox>  
                  <DepartGradeBox>
                  <div>
                    의료IT공학과 3학년
                  </div>
                  </DepartGradeBox>
                </UserInfo> 
            </UserContainer>
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
        <MyPageList>
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