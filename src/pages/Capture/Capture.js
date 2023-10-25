//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  RequestCheckBoxContainer,
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
          <RequestCheckBox content="이해하기 쉽게 설명해줘"/>
          <RequestCheckBox content="이해하기 쉽게 요약해줘"/>
          <RequestCheckBox content="이해하기 쉽게 정리해줘"/>
          <RequestCheckBox content="이해하기 쉽게 해설해줘"/>
          <RequestCheckBox content="이해하기 쉽게 풀어줘"/>
          <RequestCheckBox content="이해하기 쉽게 졸리다"/>
        </RequestCheckBoxContainer>
        <BottomEmptyBox/>
      </Aside>
      <Main>
        <CaptureHeader/>
        <TopEmptyBox />
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Capture;