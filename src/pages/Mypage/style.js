import styled from 'styled-components';

//마이페이지 헤더
export const MyPageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  height: 65px;
  background-color: #BABABA;
  font-weight: bold;
  font-size: 24px;
`;

export const TopEmptyBox = styled.div`
  width: 300px;
  height: 65px;
`;
//Mypage 메인
export const MypageContainer = styled.div`
  height: 100%;
  overscroll-behavior-y: none;
  position: fixed;
  top:0; bottom: 0;
  left:0; right:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//UserInfo
export const UserInfoContainer = styled.div`
  display: flex;
  flex-Direction: column;
  justify-Content: center;
  align-Items: center;
  margin-top: 50px;
  `;

export const UserContainer = styled.div`
  display: flex;
  width: 240px;
  gap: 15px;
  margin-bottom: 10px;
  `;

export const MyPageImg = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  flex-Direction: column;
  justify-Content: center;
  align-Items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 0;
`;

export const UsernickBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserNick = styled.span`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
`;

export const UserCrownBox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

export const MajorGrade = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #898989;
  text-indent: 7px;
`;

//유저 레벨 박스
export const UserLevelBox = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  gap: 10px;
  width: 240px;
`;

export const UserLevel = styled.span`
  font-size: 16px;
  color: #8D8D8D;
`;

//UL
export const Ul = styled.ul`
  display: flex;
  flex-Direction: column;
  justify-Content: center;
  align-Items: center;
  padding: 0;
`;

export const MyPageList = styled.li`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

export const ListBtn = styled.button`
  border: 0;
  background-color: #fff;
`;

export const ImgText = styled.div`
  width: 160px;
  height: 55px;
  font-size: 24px;
  font-weight: bold;
  line-height: 55px;
  background-color: #fff;
  color: black;
  text-align: left;
`;



//modal
export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index:10;
  `;

export const ModalBody = styled.div` 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

export const Content = styled.div`
  background: white;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  width: 380px;
  height: 200px;
`;

export const ModalTItle = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 30px;
`;

export const NickBtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ModalSetBtn = styled.button`
  background-color: #3DA5F5;
  padding: 10px;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px; 
  color: white;
`;

export const ModalCloseBtn = styled.button`
  background-color: #fff;
  padding: 10px;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #3DA5F5;
  border-radius: 10px; 
  color: #3DA5F5;
`;