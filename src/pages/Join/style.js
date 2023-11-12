import styled, { css } from 'styled-components';

export const JoinContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const JoinHeader = styled.div`
    width: 100%;
    height: 65px;
    background-color: #9A9A9A;
    margin-bottom: 50px;
`;

export const BackButton = styled.img`
    width: 20px;
    height: 20px;
    margin: auto 0px auto 5px;
    transform: rotate(180deg); //180도 돌리기
`;

export const Empty = styled.img`
    width: 20px;
    height: 20px;
    margin: auto 0px auto 5px;
    visibility: hidden;
`;

export const TitleContainer = styled.div`
  display:flex;
  width:350px;
  margin-bottom: 8px;
  justify-content: space-between;
  align-content: center;
  font-size: 50px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const SubTitleContainer = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    width:300px;
    Text-Align: Center;
`;

export const Desc = styled.div`
  font-size: 13px;
  width: 130px;
  color: red;
  height: 20px;
  margin-top: 1px;
  margin-bottom: 4px;
  
`;

export const Button = styled.button`
  width: 260px;
  height: 50px;
  background-color: #3DA5F5;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  ${({ disabled }) => disabled && disabledStyles}
`;

const disabledStyles = css`
  opacity: 0.6;
  pointer-events: none;
  /* 다른 스타일을 추가하려면 여기에 추가 */
`;

export const JoinForm1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => (props.$done) &&
        css`
            display: none;
        `}
`;

export const JoinForm2 = styled.div`
    display: none;
    ${props => (props.$done) &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}
`;

export const BottomFix = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 82px;
  background-color: #fff;
  z-index: 999;
`;