//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  RequestCheckBoxContainer,
  CaptureContainer,
  CameraBtn,
  CameraBtnContainer,
  ImgContainer,
} from './style';
//library
import React from 'react';
//components
import CaptureHeader from '../../components/Capture';
import RequestCheckBox from '../../components/RequestCheckBox';

const Capture = () => {

  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>요구사항</TopLeftHeader>
        <RequestCheckBoxContainer>
          <RequestCheckBox content="이해하기 쉽게 설명해줘" id="0"/>
          <RequestCheckBox content="이해하기 쉽게 요약해줘" id="1"/>
          <RequestCheckBox content="이해하기 쉽게 정리해줘" id="2"/>
          <RequestCheckBox content="이해하기 쉽게 해설해줘" id="3"/>
          <RequestCheckBox content="이해하기 쉽게 풀어줘" id="4"/>
          <RequestCheckBox content="이해하기 쉽게 졸리다" id="5"/>
        </RequestCheckBoxContainer>
        <BottomEmptyBox/>
      </Aside>
      <Main>
        <CaptureHeader/>
        <CaptureContainer>
          <ImgContainer></ImgContainer>
          <CameraBtnContainer>
            <CameraBtn>다시 찍기</CameraBtn>
            <CameraBtn>사진 사용</CameraBtn>
          </CameraBtnContainer>
        </CaptureContainer>
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Capture;