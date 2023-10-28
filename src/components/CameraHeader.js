//style
import { 
  CameraHeaderTop,
  HeaderImgBox,
  Setting,
  ImgBtn,
  CameraTopInput,
  Option,
} from './style';
//library
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
//library
import { Link, useNavigate } from "react-router-dom";
//store.js에서 'toggleAsideVisibility'라는 액션을 import
import { toggleAsideVisibility } from '../store';
//img
import screenSplit from '../assets/screen-split.svg';
import zoom from '../assets/zoom.svg';
import camera from '../assets/camera.png';
import setting from '../assets/setting.png';


const CameraHeader = () => {
  const navigate = useNavigate();
    //카메라
    const handleFileChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    
    if (fileURL) {
        console.log("선택한 파일(홈페이지):", fileURL);
        // 파일을 전달하고 다른 페이지로 이동
        navigate("/capture", { state: fileURL });
        }
    };
  //화면 크기 전환
  const [fullScreen, setFullScreen] = useState(false);
  function ScreenHandler(){
    setFullScreen(!fullScreen);
  }
  //useSelector 훅을 사용해서 visibility슬라이스의 isAsideVisible 상태를 추출한다.
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  //useDispatch를 호출하여 dispatch함수를 가져와 이 함수를 이용해 리덕스 스토어에 액션을 보낼 수 있다.
  const dispatch = useDispatch();

  //dispatch함수를 실행해서 toggleAsideVisibility 액션을 수행하게 함
  const AsideHandler = () => {
    dispatch(toggleAsideVisibility());
  };

  return (
    <CameraHeaderTop style={{ left: isAsideVisible ? '0' : '300px' }}>
      <img src={fullScreen ? screenSplit : zoom} alt="화면 전환 버튼"  onClick={()=>{
        AsideHandler();
        ScreenHandler();
      }}/>
      <HeaderImgBox>
        <CameraTopInput 
          type="file"
          accept="image/*; capture=camera"
          onChange={handleFileChange}/>
          <ImgBtn
            src={camera}
            alt="홈"
            style={{ opacity: 1 }}
          />
        <div>
            <img src={setting} alt="세팅 버튼" width="35"/>
            <Setting>
              <Option value="titleChange">이름 변경하기</Option>
              <Option value="copy">본문 복사하기</Option>
              <Option value="delete">삭제하기</Option>
            </Setting>
        </div>
      </HeaderImgBox>
    </CameraHeaderTop>
  );
};

export default CameraHeader;
