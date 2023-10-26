//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  RequestCheckBoxContainer,
  CameraBtn,
  ImgContainer,
  CameraInput,
} from './style';
//library
import React, { useState, useRef } from 'react';
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css';
import { useLocation, useNavigate } from "react-router-dom";
//components
import TopRightHeader from '../../components/Capture';
import RequestCheckBox from '../../components/RequestCheckBox';

const Capture = () => {
  const { state } = useLocation();
  console.log('첨부된 파일 잘 받았다:', state);

  const [imagePath, setImagePath] = useState(state);
  const [croppedImage, setCroppedImage] = useState(""); // 추가: 크롭된 이미지 저장 상태
  const cropperRef = useRef(null);



  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>요구사항</TopLeftHeader>
        <RequestCheckBox content="이해하기 쉽게 설명해줘" id="0" />
        <RequestCheckBox content="이해하기 쉽게 요약해줘" id="1" />
        <RequestCheckBox content="이해하기 쉽게 정리해줘" id="2" />
        <RequestCheckBox content="이해하기 쉽게 해설해줘" id="3" />
        <RequestCheckBox content="이해하기 쉽게 풀어줘" id="4" />
        <RequestCheckBox content="이해하기 쉽게 졸리다" id="5" />
        <RequestCheckBox content="이해하기 쉽게 정리해줘" id="2" />
        <RequestCheckBox content="이해하기 쉽게 해설해줘" id="3" />
        <RequestCheckBox content="이해하기 쉽게 풀어줘" id="4" />
        <RequestCheckBox content="이해하기 쉽게 졸리다" id="5" />
        <RequestCheckBox content="이해하기 쉽게 정리해줘" id="2" />
        <RequestCheckBox content="이해하기 쉽게 해설해줘" id="3" />
        <RequestCheckBox content="이해하기 쉽게 풀어줘" id="4" />
        <RequestCheckBox content="이해하기 쉽게 졸리다" id="5" />


        <CameraBtn>다시 찍기</CameraBtn>
        <CameraBtn>사진 분석</CameraBtn>

        <BottomEmptyBox />
      </Aside>
      <Main>
        <TopRightHeader />
        <ImgContainer>
          <div className="canvas" id="canvas">
            <Cropper id='cropper' src={imagePath} ref={cropperRef} />
          </div>
        </ImgContainer>

        <BottomEmptyBox />
      </Main>
    </>
  );
}

export default Capture;