//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  FromBox,
} from './style';
//library
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store';
//components
import CameraHeader from '../../components/CameraHeader';
import CameraBodySection from '../../components/CameraBodySection';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
import CameraItem from '../../components/CameraItem';
import Search from '../../components/SearchInput';
import MyModal from '../../components/Modal';

const Home = () => {

  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);

  const stateChange = useSelector((state) => state.CameraItemId.scrap);

  //검색한데이터
  const [searchWord, setSearchWord] = useState('');

  const requestHistory = async () => {
    try {
      const response = await axiosInstance.get('/question/list');
      console.log(response.data.length);
      if (response.data.length !== 0) {
        setCameraListData(response.data);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestHistory();
  }, [stateChange])



  const sampleJson = [
    {
      id: "0",
      title: "사진을 찍어보세요!",
      content: "AI가 사진속 글을 인식하고, 요구사항에 맞는 최적의 답변을 해드립니다",
      date: "WITH-YOU",
      isScrap: "YES"
    },
  ];

  const [cameraListData,setCameraListData] = useState(sampleJson);
  const isOpen = useSelector((state) => state.modal.isOpen);
  console.log("모달 상태 확인: ", isOpen);

  const dispatch = useDispatch();
  const Modal = () => {
    dispatch(openModal())
  }
  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>History</TopLeftHeader>
        <FromBox><Search
          onDataSearch={(getData) => setSearchWord(getData)} /></FromBox>
        {cameraListData.map((sample, index) => (
          <div
            key={index}>
            <CameraItem
              searchWord={searchWord}
              key={index}
              id={sample.id}
              title={sample.title}
              body={sample.content}
              date={sample.date}
              $scrap={sample.isScrap}
            />
          </div>
        ))}
        <BottomEmptyBox />
      </Aside>
      <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
        <CameraHeader />
        <TopEmptyBox />
        <CameraBodySection/>
        {isOpen && (
          <MyModal onClose={Modal}/>
        )}
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Home;