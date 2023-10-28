//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  CameraAgainBtn,
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
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';

//components
import TopRightHeader from '../../components/Capture';
import RequestCheckBox from '../../components/RequestCheckBox';

const Capture = () => {
  const { state } = useLocation();

  const [imagePath, setImagePath] = useState(state);
  const [croppedImage, setCroppedImage] = useState(""); // 추가: 크롭된 이미지 저장 상태
  const cropperRef = useRef(null);
  const calculatedHeight = window.innerHeight - 145;

  //요구사항
  const [question, setQuestion] = useState('이해하기 쉽게 설명해줘');
  //다시찍기 핸들러
  const fileInputRef = useRef(null);
  const captureAgainHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setImagePath(fileURL);
  }

  //크롭한 이미지 저장
  const formData = new FormData();
  const getCropData = async () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      setCroppedImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL());

      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      await croppedCanvas.toBlob((blob) => { 
        // Blob을 파일로 변환하여 FormData에 추가
        const croppedFile = new File([blob], 'croppedImage.png', { type: 'image/png' });
        formData.append('imageFile', croppedFile);
        formData.append('question', question);
        sendFormDataRequest()
      }, 'image/png');
    }
  };

  const sendFormDataRequest = async () => {
    try {
      const response = await axiosInstance.post('/ai/question', formData);
      console.log("전송 성공: ", response);
    } catch (error) {
      console.log(error);
    }
  };

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

        <div>
          <input
            type="file"
            accept="image/*; capture=camera"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <CameraAgainBtn onClick={captureAgainHandler}>다시 찍기</CameraAgainBtn>
        </div>
        <CameraBtn
          onClick={getCropData}
        >사진 분석</CameraBtn>
        <BottomEmptyBox />
      </Aside>
      <Main>
        <TopRightHeader />
        <TopEmptyBox />
        <ImgContainer>
          <div className="canvas" id="canvas">
            <Cropper
              id='cropper'
              src={imagePath}
              ref={cropperRef}
              style={{ height: `${calculatedHeight}px` }}
              guides={true}
            />
          </div>
        </ImgContainer>

        <BottomEmptyBox />
      </Main>
    </>
  );
}

export default Capture;