//style
import { 
  HeaderImgBox,
  ScrapHeaderTop,
  LoadingText,
  LoadingTextContainer,
  Dot1,
  Dot2,
  Dot3,  
} from './style';
//library
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
//store.js에서 'toggleAsideVisibility'라는 액션을 import
import { openModal, deleteId,toggleAsideVisibility } from '../store';
//img
import screenSplit from '../assets/screen-split.svg';
import zoom from '../assets/zoom.svg';

const ScrapHeader = () => {
  const loading = useSelector((state) => state.loading.isLoading);
  
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

  //복사
  const copyBodyData = useSelector((state) => state.CameraItemId.bodyData);

   //삭제한 뒤 리덕스 값을 0으로 지정
  const selectDeleteId = useSelector((state) => state.CameraItemId.id);
  const deleteListRequestTest = async (props) => {
    try {
      await axiosInstance.delete('/question/delete', { params: { id: props } });
      alert("삭제가 완료되었습니다!");
      window.location.replace("/home");
    }
    catch (error) {
      console.log(error);
    }
  }
  //자식에게 설정 데이터 받기
  const getSetting = (getSetteingData) => {
    switch (getSetteingData) {
      case "제목 변경하기":
        console.log("제목 변경하는 로직");
        dispatch(openModal());
        break;
      case "본문 복사하기":
        console.log("본문 복사 로직");
        break;
      case "삭제하기":
        dispatch(deleteId('0'));
        deleteListRequestTest(selectDeleteId);
        break;
      default:
        break;
    }
  };

  return (
    <ScrapHeaderTop style={{ left: isAsideVisible ? '0' : '300px' }}>
      <img src={fullScreen ? screenSplit : zoom} alt="화면 전환 버튼"  onClick={()=>{
        AsideHandler();
        ScreenHandler();
      }}/>
      {loading ? (<LoadingTextContainer>
        <LoadingText>
          사진 분석 중입니다
        </LoadingText>
          <Dot1> .</Dot1>
          <Dot2> .</Dot2>
          <Dot3> .</Dot3>
      </LoadingTextContainer>) : (null)}
      <HeaderImgBox/>
     
    </ScrapHeaderTop>
  );
};

export default ScrapHeader;
