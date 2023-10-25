//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
} from './style';
//library
import React from 'react';
import { useSelector } from 'react-redux';
//components
import CameraHeader from '../../components/CameraHeader';

//useSelector는 store.js의 'visibility' 슬라이스의 'isAsideVisible' 값을 추출하는 역할을 한다.
const Home = () => {
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  return (
    <>
        <Aside>
          <TopEmptyBox></TopEmptyBox>
          <TopLeftHeader>History</TopLeftHeader>
          <p>친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다.</p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <p>친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다.</p>
          <BottomEmptyBox/>
        </Aside>
        <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
          <CameraHeader></CameraHeader>
          <TopEmptyBox/>
          <p>친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다.</p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <p>친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다..친구는 세월의 도둑이다.</p>
          <BottomEmptyBox>
          </BottomEmptyBox>
        </Main>
    </>
  );
}

export default Home;