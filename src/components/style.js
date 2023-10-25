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
  border-top: 1px solid #bababa;
  background-color: #fff;
`;


//CameraHeader
export const CameraItemContainer = styled.div`
  width: 300px;
  height: 100px;
  padding: 10px;
  border-bottom: 1px solid grey;
`;

export const CameraItemTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  margin-top: 5px;
  
`;

export const CameraItemTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: none;
`;

export const CameraItemScrap = styled.div`
  width: 16px;
  height: 16px;
  margin: auto 0 auto 3px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: none;
  ${props => props.$done && css`
        background-image: url(${fillStar});
    `}
`

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

export const CameraItemButtom = styled.div`
 
  width: 280px;
  color: grey;
  font-size: 10px;
`;

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

export const Ul = styled.ul`
  display: flex;
  padding: 0 5px;
  justify-content: space-around;
  list-style: none;
`;

export const ImgBtn = styled.img`
  width: 35px;

`;