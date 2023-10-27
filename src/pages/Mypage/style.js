import styled from 'styled-components';

export const MyPageHeaer = styled.div`
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

//UserInfo
export const UserInfoContainer = styled.div`
  background-color: yellow;
  display: flex;
  flex-Direction: column;
  justify-Content: center;
  align-Items: center;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  flex-Direction: column;
  justify-Content: center;
  align-Items: center;
`;

export const MyPageList = styled.li`
  display: flex;
  gap: 20px;
  margin: 25px 0;
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