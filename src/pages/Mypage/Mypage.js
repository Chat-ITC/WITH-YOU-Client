//style
import {
  MypageContainer,
  MyPageHeader,
  TopEmptyBox,
  UserInfoContainer,
  UserContainer,
  UserLevelBox,
  UserInfo,
  UserCrownBox,
  UsernickBox,
  MyPageImg,
  UserNick,
  MajorGrade,
  UserLevel,
  ImgText,
  MyPageList,
  ListBtn,
  Ul,
} from './style';
//library
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
//img
import userInfo from '../../assets/userInfo.png';
import nameChange from '../../assets/nameChange.png';
import inquiry from '../../assets/inquiry.png';
import logout from '../../assets/logout.png';
import Crown1 from '../../assets/crown1.png';
import Crown2 from '../../assets/crown2.png';
import Crown3 from '../../assets/crown3.png';
import Crown4 from '../../assets/crown4.png';
//modal
import MyModal from './MyModal';
import { removeCookie } from '../../utils/Cookies/Cookies';

const Mypage = () => {

  const navigate = useNavigate();
  const sampleJson = [
    {
      id: "1",
      nickname: "감흥없는 김밥",
      major: "의료IT공학과",
      grade: 3,
      level: 35,
      levelgage: 80,
    },
  ];
  const [userInfoData, setUserInfoData] = useState(sampleJson);
  //유저 정보 받아오기
  const requestUserInfo = async () => {
    try {
      const response = await axiosInstance.get('/member/mypage');
      console.log(response.data);
      setUserInfoData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    requestUserInfo();
  }, [])

  //modal
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  //레벨에 따라 왕관 이미지 변경
  function getLevelCrown(level) {
    if (level <= 10) {
      return <img src={Crown1} alt="Crown1" width="25" />;
    } else if (level <= 20) {
      return <img src={Crown2} alt="Crown2" width="25" />;
    } else if (level <= 30) {
      return <img src={Crown3} alt="Crown3" width="25" />;
    } else if (level <= 40){
      return <img src={Crown4} alt="Crown4" width="25" />;
    }
    return null; // 다른 경우에는 null을 반환하여 아무 왕관도 표시하지 않음
  }

  //문의하기
  const inquiryButton = () => {
    window.open('https://open.kakao.com/o/sOJwcqIf', '_blank');
  };

  //로그아웃
  const Logout = async () => {
    try {
      await axiosInstance.post('/member/logout');
      removeCookie('accesstoken', {path : '/'},1000)
      alert("로그아웃 완료");
      navigate("/");
    } catch (error) {
      alert("로그아웃 실패");
    }
  };
  return (
    <>
      <MyPageHeader>My Page</MyPageHeader>
      <TopEmptyBox />
      <MypageContainer>
        <UserInfoContainer>
          <UserContainer>
            <MyPageImg>
              <img src={userInfo} alt="" width="75" />
            </MyPageImg>
            <UserInfo>
              <UsernickBox>
                <UserCrownBox>
                  {getLevelCrown(userInfoData.level)}
                </UserCrownBox>
                <UserNick>
                  {userInfoData.nickName}
                </UserNick>
              </UsernickBox>
              <MajorGrade>
                {userInfoData.major} {userInfoData.grade}학년
              </MajorGrade>
            </UserInfo>
          </UserContainer>
          <UserLevelBox>
            <UserLevel>Lv.{Math.floor(userInfoData.level)}</UserLevel>
            <progress value={(userInfoData.level - Math.floor(userInfoData.level)) * 100} min="0" max="100"></progress>
          </UserLevelBox>
        </UserInfoContainer>
        <Ul>
          <MyPageList onClick={handleOpenModal}>
            <MyPageImg>
              <img src={nameChange} alt="닉네임 설정" width="35" />
            </MyPageImg>
            <ListBtn>
              <ImgText>닉네임 설정</ImgText>
            </ListBtn>
          </MyPageList>
          {isOpen && (
            <MyModal onClose={handleCloseModal} />
          )}
          <MyPageList onClick={inquiryButton}>
            <MyPageImg >
              <img src={inquiry} alt="문의하기" width="35" />
            </MyPageImg>
            <ListBtn>
              <ImgText>문의하기</ImgText>
            </ListBtn>
          </MyPageList>
          <MyPageList onClick={Logout}>
            <MyPageImg>
              <img src={logout} alt="로그아웃" width="35" />
            </MyPageImg>
            <ListBtn>
              <ImgText>로그아웃</ImgText>
            </ListBtn>
          </MyPageList>
        </Ul>
      </MypageContainer>
    </>
  );
}

export default Mypage;