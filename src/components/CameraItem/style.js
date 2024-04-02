import styled, { css } from 'styled-components';
import fillStar from '../../assets/FillStar.svg';


//CameraItem
export const CameraItemContainer = styled.div`
  width: 275px;
  height: 100px;
  padding: 10px 10px 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
`;

export const CameraItemTitle = styled.div` 
  font-weight: bold;
  font-size: 17px; 
  width: 265px;
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
  justify-content: flex-start;
  align-content: center;
  gap: 5px;
`;

export const CameraItemScrap = styled.div`
  width: 0px;
  height: 0px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: none;
  ${props => props.$done === "YES" && css`
        background-image: url(${fillStar});
        width: 16px;
        height: 16px;
    `}
`

export const CameraDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  gap: 5px;
`