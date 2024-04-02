import styled, { css } from 'styled-components';

import camera from '../../assets/camera.svg';
import fillStar from '../../assets/FillStar.svg';
import emptyStar from '../../assets/star.svg';

export const CameraBigButton = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${camera});
  width: 200px;
  height: 200px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4));
`;

export const CameraButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 160px;
`;

export const CameraPhrases = styled.div`
  position: relative;
  top: 0px;
  font-size: 24px;
  color: #F07878;
  font-weight: bold;
`

export const CameraInput = styled.input`
  display: block;
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0;
`;

export const CameraBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 79%;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px 45px 40px 40px;
  white-space: pre-wrap;
`

export const HistoryScrapBtn = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${emptyStar});
  ${props => props.$scrapState === "YES" && css`
        background-image: url(${fillStar});
    `}
`

export const BodyDataContainer = styled.div`
  padding: 0px 45px 40px 40px;
  font-size: 19px;
  white-space: pre-wrap;
  line-height: 30px;
`

export const ScrapBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin: 10px 0;
`
export const BodyTitleContainer = styled.span`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;

export const HiddenBox = styled.div`
  width: 40px;
`;


