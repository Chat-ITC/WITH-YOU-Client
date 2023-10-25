//style
import { 
  CameraHeaderTop,
  HeaderImgBox,
  Setting,
} from './style';
//library
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
//store.js에서 'toggleAsideVisibility'라는 액션을 import
import { toggleAsideVisibility } from '../store';
//img
import screenSplit from '../assets/screen-split.svg';
import zoom from '../assets/zoom.svg';
import camera from '../assets/camera.png';
import setting from '../assets/setting.png';


const CameraHeader = () => {
  const [fullScreen, setFullScreen] = useState(false);
  function ScreenHandler(){
    setFullScreen(!fullScreen);
  }
  //useSelector 훅을 사용해서 visibility슬라이스의 isAsideVisible 상태를 추출한다.
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  //useDispatch를 호출하여 dispatch함수를 가져와 이 함수를 이용해 리덕스 스토어에 액션을 보낼 수 있다.
  const dispatch = useDispatch();

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
        <img src={camera} alt="카메라 버튼" width="35"/>
        <div>
            <img src={setting} alt="세팅 버튼" width="35"/>
            <Setting>
              <option value="titleChange">이름 변경하기</option>
              <option value="copy">본문 복사하기</option>
              <option value="delete">삭제하기</option>
            </Setting>
        </div>
      </HeaderImgBox>
    </CameraHeaderTop>
  );
};

export default CameraHeader;
