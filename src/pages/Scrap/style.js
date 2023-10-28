import styled, { css } from "styled-components";

//img
import scrapRadioOn from '../../assets/scrapRadioON.svg'
import scrapRadioOFF from '../../assets/scrapRadioOFF.svg'

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

export const BtnBox = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 5px;
  margin-bottom: -15px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const HistoryBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 111px;
  height: 37px;
  color: #FDC674;
  background-repeat: no-repeat;
  background-size: contain;
  background-image:  url(${scrapRadioOFF});
  ${props => props.$done && css`
    color: white;
    background-image: url(${scrapRadioOn});
  `}
`;

export const CommunityBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 111px;
  height: 37px;
  color: #FDC674;
  background-repeat: no-repeat;
  background-size: contain;
  background-image:  url(${scrapRadioOFF});
  ${props => props.$done && css`
    color: white;
    background-image:  url(${scrapRadioOn});
  `}
`;

export const RadioText = styled.span`
  text-indent: 14px;
  margin: 8px 0 3px 0;
  font-size: 16px;
`