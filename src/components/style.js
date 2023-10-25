import styled, { css } from 'styled-components';

import fillStar from '../assets/FillStar.png';
import emptyStar from '../assets/clip.png';

//Bottom
export const BottomFix = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  background-color: green;
`;


//CameraHeader
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

//RightTop
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
