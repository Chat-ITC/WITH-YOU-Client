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
  background-color: #F07878;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
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
`;

//RequestCheckBoxContainer
export const RequestCheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 79%; 
`;

//CaptureContainer
export const CaptureContainer = styled.div`
  width: 820px;
  height: 79%;
  margin: 0 auto;
  position: relative;
  z-index: -1;
`;

export const ImgContainer = styled.div`
  margin-top: 5px;
  width: 820px;
  height: 87%;
`;

export const CropBtn = styled.button`
  position: absolute;
  z-index: 1;
`;

export const CameraBtnContainer = styled.div`
  width: 820px;
  display: flex;
  justify-content: center;
  gap: 100px;
  position: absolute;
  bottom: 10px;
`;

export const CameraBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #FFC1C1;
  text-align: center;
  line-height: 50px;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 24px;
`;

//다시찍기 Input 버튼
export const CameraInput = styled.input`
  display: block;
  position: fixed;
  bottom: 112px;
  left: 497px;
  width: 200px;
  height: 50px;
  opacity: 0;
`;