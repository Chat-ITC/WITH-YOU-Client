//style
import { CameraHeaderTop } from './style';
//library
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//store.js에서 'toggleAsideVisibility'라는 액션을 import
import { toggleAsideVisibility } from '../store';


const CameraHeader = () => {
  //useSelector 훅을 사용해서 visibility슬라이스의 isAsideVisible 상태를 추출한다.
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  //useDispatch를 호출하여 dispatch함수를 가져와 이 함수를 이용해 리덕스 스토어에 액션을 보낼 수 있다.
  const dispatch = useDispatch();

  const AsideHandler = () => {
    dispatch(toggleAsideVisibility());
  };

  return (
    <CameraHeaderTop style={{ left: isAsideVisible ? '0' : '300px' }}>
      <div onClick={AsideHandler}>눌러</div>
    </CameraHeaderTop>
  );
};

export default CameraHeader;
