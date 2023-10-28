import styled from 'styled-components';

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

//MyPage
export const MypageHeader = styled.div`
  width: 600px;
  margin: 0 auto;
`;

//UserInfo
export const UserInfoContainer = styled.div`
  display: flex;
  flex-Direction: column;
  justify-Content: center;
  align-Items: center;
  margin-top: 50px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserContainer = styled.div`
  display: flex;
  width: 240px;
  gap: 20px;
`;

export const UsernickBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserCrownBox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

export const UserNick = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

export const UserLevelBox = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 240px;
`;

export const UserLevel = styled.span`
  font-size: 14px;
  color: #8D8D8D;
`;

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

export const MyPageImg = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  flex-Direction: column;
  justify-Content: center;
  align-Items: center;
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

export const ListBtn = styled.button`
  border: 0;
  background-color: #fff;
`;