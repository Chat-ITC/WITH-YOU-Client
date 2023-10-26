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
  CameraInput,
} from './style';
//library
import React,{ useState, useRef, useEffect } from 'react';
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css';
import { useLocation, useNavigate } from "react-router-dom";
//components
import TopRightHeader from '../../components/Capture';
import RequestCheckBox from '../../components/RequestCheckBox';

const Capture = () => {
  const navigate = useNavigate();
    //카메라
    const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        console.log("선택한 파일(홈페이지):", file);

        // 파일을 전달하고 다른 페이지로 이동
        navigate("/capture", { state: { selectedFile: file } });
        }
    };

  const location = useLocation();
  const selectedFile = location.state.selectedFile;
  console.log('첨부된 파일 잘 받았다:', selectedFile);

  const [imagePath, setImagePath] = useState(selectedFile);
  const [croppedImage, setCroppedImage] = useState(""); // 추가: 크롭된 이미지 저장 상태
  const cropperRef = useRef(null);

  const handleChange = (e) => {
    const tempImagePath = URL.createObjectURL(e.target.files[0]);
    setImagePath(tempImagePath);
    showImage();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const tempImagePath = URL.createObjectURL(e.dataTransfer.files[0]);
    setImagePath(tempImagePath);
    showImage();
  }

  /*const handleCrop = async () => {
    const croppedImageDataURI = await getCroppedImage();
    setCroppedImage(croppedImageDataURI); // 크롭된 이미지 상태 업데이트
  }*/

  const showImage = () => {
    document.querySelector('.input-div').style.display = 'none';
    document.querySelector('.output-div').style.display = 'flex';
    document.querySelector('.crop-Btn').style.display = 'block';
  }

  /*const getCroppedImage = async () => {
    return new Promise((resolve) => {
      const imageElement = cropperRef?.current;
      const cropper = imageElement?.cropper;
      cropper.getCroppedCanvas().toBlob((blob) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    });
  }*/

  const preventScroll = (e) => {
    e.preventDefault();
  }
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
        <TopRightHeader/>
        
        <CaptureContainer>
          <ImgContainer className='input-div' onDrop={handleDrop} onWheel={preventScroll}>
            {selectedFile && (
              <img src={URL.createObjectURL(selectedFile)} alt="사진" width="820" height="100%"/>
            )}
            {croppedImage && (
          <div className="cropped-preview">
            <img src={croppedImage} alt='cropped'/>
          </div>
        )}
          </ImgContainer>
          <div className='output-div'>
            <Cropper src={imagePath} ref={cropperRef}/>
          </div>
          <CameraBtnContainer>
            <CameraInput 
                    type="file"
                    accept="image/*;
                    capture=camera"
                    onChange={handleFileChange}/>
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