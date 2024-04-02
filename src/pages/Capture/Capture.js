//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  CameraAgainBtn,
  CameraBtn,
  ImgContainer,
  TopRightHeader
} from './style';
//library
import React, { useState, useRef } from 'react';
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css';
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';

//components
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
    alert('AI가 열심히 답변중입니다. 답변 완료까지 약간의 시간이 소요됩니다.')
    navigate('/home');
    try {
      const response = await axiosInstance.post('/ai/question', formData);

      if (response.data === "저장 완료") {
        alert("사진 분석 완료! 홈 화면으로 이동합니다.")
        window.location.replace("/home");

      }
      console.log("전송 성공: ", response);
    } catch (error) {
      alert("사진 분석 실패. 홈 화면으로 이동합니다.")
      console.log(error);
    }
  };

  //요구사항
  const [question, setQuestion] = useState("이해하기 쉬운 설명해줘");
  const [selectedId, setSelectedId] = useState(0);
  const [checked, setChecked] = useState(true);

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
      content: "이해하기 쉬운 설명",
      sendData: "이해하기 쉽게 설명해줘"
    },
    {
      id: 1,
      content: "자세한 설명",
      sendData: "자세하게 설명해줘"

    },
    {
      id: 2,
      content: "간단한 요약",
      sendData: "간단하게 요약해줘"
    },
    {
      id: 3,
      content: "이해를 위한 예시",
      sendData: "이해하기 쉽도록 예시 들어서 설명해줘"
    },
    {
      id: 4,
      content: "비슷한 내용의 퀴즈",
      sendData: "이해했는지 테스트 할 만한 퀴즈 만들어줘"
    },

  ]

  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>요구사항</TopLeftHeader>
        {requestJson.map((requestjson, index) => (
          <RequestCheckBox
            key={index}
            onClick={() => {
              setQuestion(requestjson.sendData);
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
        <TopRightHeader>분석할 내용을 드래그하세요</TopRightHeader>
        <TopEmptyBox />
        <ImgContainer>
          <div className="canvas" id="canvas">
            <Cropper
              id='cropper'
              src={imagePath}
              ref={cropperRef}
              style={{ height: `${calculatedHeight}px` }}
              guides={true}
              toggleDragModeOnDblclick={false}
              autoCrop={false}
            />
          </div>
        </ImgContainer>

        <BottomEmptyBox />
      </Main>
    </>
  );
}

export default Capture;