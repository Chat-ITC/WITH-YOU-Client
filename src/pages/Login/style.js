import styled, { css } from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginHeader = styled.div`
    width: 100%;
    height: 65px;
    background-color: #9A9A9A;
    margin-bottom: 50px;
`;

export const TitleContainer = styled.div`
  font-size: 50px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const SubTitleContainer = styled.div`
    font-size: 18px;
    margin-bottom: 20px; 
`;

export const WrongId = styled.p` 
  font-size: 13px;
  color: red;
  height: 5px;
  margin-top: 5px;
  margin-Bottom: 15px;
`;

const disabledStyles = css`
  opacity: 0.6;
  pointer-events: none;
  /* 다른 스타일을 추가하려면 여기에 추가 */
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

export const LinkBtn = styled.div`
  text-align: center;
  margin-top: 10px;
`;

