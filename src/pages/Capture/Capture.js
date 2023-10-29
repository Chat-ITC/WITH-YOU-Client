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
  const navigate = useNavigate();
  const { state } = useLocation();

  const [imagePath, setImagePath] = useState(state);
  const cropperRef = useRef(null);
  const calculatedHeight = window.innerHeight - 145;



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
      if(response.data === "저장 완료") {
        alert("사진 분석 완료! 홈 화면으로 이동합니다.")
        navigate('/home');
      }
      console.log("전송 성공: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  //요구사항
  const [question, setQuestion] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleCheckBoxClick = (id) => {
    if (selectedId === id) {
      // 이미 선택한 요구사항의 체크박스를 클릭한 경우, 선택 해제
      setSelectedId(null);
      setChecked(false);
    } else {
      // 선택한 요구사항의 체크박스를 클릭한 경우, 선택
      setSelectedId(id);
      setChecked(true);
    }
  };

  const requestJson = [
    {
      id: 0,
      content: "이해하기 쉬운 설명"
    },
    {
      id: 1,
      content: "자세한 설명"
    },
    {
      id: 2,
      content: "간단한 요약"
    },
    {
      id: 3,
      content: "이해를 위한 예시"
    },
    {
      id: 4,
      content: "비슷한 내용의 퀴즈"
    },

  ]

  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>요구사항</TopLeftHeader>
    {requestJson.map((requestjson,index) => (
      <RequestCheckBox
      key={index}
      onClick={() => { 
        setQuestion(requestjson.content);
        handleCheckBoxClick(requestjson.id);
      }}
      content={requestjson.content}
      id={requestjson.id}
      
      $done={selectedId === requestjson.id && checked}
    />
    ))}

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