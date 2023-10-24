import styled from "styled-components";

export const Aside = styled.div`
position: fixed;
  width: 300px;
  top:0;
  left:0;
  height: 100%;
  background-color: red;
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
  width: 100px;
  height: 65px;
`;

export const Main = styled.div`
  position: fixed;
  left: 300px;
  top: 0;
  height: 100%;
  right: 0;
  background-color:blue;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
  transition: all 350ms;
`;

