import styled from "styled-components";

export const Aside = styled.div`
  overscroll-behavior-y: none;
  position: fixed;
  width: 300px;
  top:0;
  left:0;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
`;

export const BottomEmptyBox = styled.div`
  width: 100px;
  height: 80px;
`;

export const TopEmptyBox = styled.div`
  width: 300px;
  height: 65px;
`;

export const TopLeftHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 300px;
  height: 65px;
  background-color: #FDC674;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

export const FromBox = styled.div`
  width: 280px;
  height: 40px;
  padding: 10px;
  padding-bottom: 5px;
`;

export const Main = styled.div`
  overscroll-behavior-y: none;
  position: fixed;
  left: 300px;
  top: 0;
  height: 100%;
  right: 0;
  border-left:1px solid rgba(0, 0, 0, 0.20);
  background-color:white;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
  transition: all 350ms;
`;

