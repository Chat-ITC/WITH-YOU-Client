//style
import { 
  CommunityHeaderTop,
  HeaderImgBox,
} from './style';
//library
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
//store.js에서 'toggleAsideVisibility'라는 액션을 import
import { toggleAsideVisibility } from '../store';
//img
import screenSplit from '../assets/screen-split.svg';
import zoom from '../assets/zoom.svg';
import write from '../assets/write.png';

const CommunityHeader = () => {
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
    <CommunityHeaderTop style={{ left: isAsideVisible ? '0' : '300px' }}>
      <img src={fullScreen ? screenSplit : zoom} alt="화면 전환 버튼"  onClick={()=>{
        AsideHandler();
        ScreenHandler();
      }}/>
      <HeaderImgBox>
        <img src={write} alt="글쓰기 버튼" width="35"/>
      </HeaderImgBox>
    </CommunityHeaderTop>
  );
};

export default CommunityHeader;
