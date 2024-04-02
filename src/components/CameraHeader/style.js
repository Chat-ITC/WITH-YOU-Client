import styled, { css, keyframes } from 'styled-components';

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

export const CameraTopInput = styled.input`
  display: block;
  position: absolute;
  width: 50px;
  height: 65px;
  opacity: 0;
`;

export const LoadingTextContainerHome = styled.span`
  padding-left: 60px;
  font-weight: bold;
  color: black;
`;

