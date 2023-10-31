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
  padding: 0 10px;
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

export const TopRightHeader = styled.div`
  display: flex;
  position: fixed;
  top:0;
  right:0;
  left:300px;
  justify-content: flex-start;
  align-items: center;
  height: 65px;
  padding: 0 20px;
  background-color: #FFC1C1;
  font-size: 22px;
  font-weight: bold;
  color: #E35E5E;
`

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


//CaptureContainer
export const ImgContainer = styled.div`
  width: 100% ;
  max-height: 400px;
`;

export const CropBtn = styled.button`
  position: absolute;
  z-index: 1;
`;

export const CameraAgainBtn = styled.button`
width: 280px;
  height: 50px;
  margin: 10px auto 5px auto;
  background-color: white;
  text-align: center;
  line-height: 50px;
  border: 1.6px solid #F07878;
  border-radius: 25px;
  color: #F07878;
  font-size: 24px;
  font-weight: bold;
`;

export const CameraBtn = styled.button`
  width: 280px;
  height: 50px;
  margin: 10px auto 10px auto;
  background-color: #F07878;
  color: white;
  text-align: center;
  line-height: 50px;
  border: 1.6px solid #F07878;
  border-radius: 25px;
  font-size: 24px;
  font-weight: bold;
`;

//다시찍기 Input 버튼
export const CameraInput = styled.input`
  display: block;
  position: fixed;
  bottom: 100px;
  left: 497px;
  width: 200px;
  height: 55px;
  opacity: 0;
`;