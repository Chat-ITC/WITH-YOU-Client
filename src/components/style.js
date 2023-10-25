import styled, { css } from 'styled-components';
import openeye from '../assets/openEye.png';
import closeeye from '../assets/closeEye.png';
import fillStar from '../assets/FillStar.png';
import camera from '../assets/camera.png'
import emptyStar from '../assets/clip.png';

//Bottom
export const BottomFix = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  border-top: 1px solid #bababa;
  background-color: #fff;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 0 5px;
  justify-content: space-around;
  list-style: none;
`;

export const ImgBtn = styled.img`
  width: 35px;
  opacity: 0.3;
`;

//CameraItem
export const CameraItemContainer = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px 10px 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
`;

export const CameraItemTitle = styled.div` 
  font-weight: bold;
  font-size: 17px; 
  height: 19px;
  overflow: hidden;
  margin-top: 5px;
  text-overflow: ellipsis;
  white-space: none;
`;

export const CameraItemBody = styled.div`
  margin-top: 8px;
  width: 265px;
  height: 50px;
  line-height: 23px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CameraItemBottom = styled.div`
  display: flex;
  width: 280px;
  height: 20px;
  align-content: center;
  
`;

export const CameraItemScrap = styled.div`
  width: 0px;
  height: 0px;
  margin: auto 3px auto 0px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: none;
  ${props => props.$done && css`
        background-image: url(${fillStar});
        width: 16px;
        height: 16px;
    `}
`

export const DateContainer = styled.div`
  color: grey;
  font-size: 12px;
  height: 12px;
  margin: 2px 0px 1px 0px;
`

//BodySection
export const CameraButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 160px;
`;
export const CameraBigButton = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: none;
  background-image: url(${camera});
  width: 200px;
  height: 200px;
`;
export const CameraPhrases = styled.div`
  font-size: 20px;
`


//CameraHeader
export const CameraHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  right:0;
  left: 300px;
  height: 65px;
  padding: 0 20px;
  background-color: #FFC1C1;
  transition: all 350ms;
`;

export const HeaderImgBox = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  position: relative;
`;

export const Setting = styled.select`
  position: absolute;
  top: -10px;
  right: 0;
  width: 35px;
  height: 60px;
  opacity: 0;
`;

//TextInput
export const InputIdContainer = styled.input`
  width: 260px;
  height: 43px;
  border: 1px solid #bababa;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  font-size: 20px;
`;
//PWInput
export const InputBox = styled.div`
  width: 260px;
  height: 43px;
  position: relative;
`;

export const PwNonVisi = styled.input`
  width: 260px;
  height: 43px;
  border: 1px solid #bababa;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  font-size: 20px;
`;

export const Eye = styled.div`
  position: absolute;
  top: 17px;
  right: 10px;
`;

export const EyeState = styled.div` 
  background-image:  url(${closeeye}); //기본상태: 닫힌 눈
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  opacity: 0.4; //투명도
  ${props =>
    props.$done &&
    css`
        background-image: url(${openeye}); //props로 false를 전달 받으면 열린 눈
    `}
`;

//SearchInput
export const SearchBox = styled.div`
  width: 240px;
  height: 35px;
  position: relative;
`;

export const SearchForm = styled.input`
  width: 235px;
  height: 35px;
  background-color: #ededed;
  border: 0px solid #000;
  border-radius: 9px;
  padding-left: 40px;
  outline: none;
`;

export const Search = styled.img`
  position: absolute;
  top: 11px;
  left: 10px;
  width: 18px;
`;