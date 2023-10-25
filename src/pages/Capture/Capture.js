//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
} from './style';
//library
import React, { useState } from 'react';
//components
import CaptureHeader from '../../components/Capture';

const Home = () => {

  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>요구사항</TopLeftHeader>
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

export default Home;