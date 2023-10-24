import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAsideVisibility } from '../store';

import { CameraHeaderTop } from './style';

const CameraHeader = () => {
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  const dispatch = useDispatch();

  const toggleAsideVisibilityHandler = () => {
    dispatch(toggleAsideVisibility());
  };

  return (
    <CameraHeaderTop style={{ left: isAsideVisible ? '0' : '300px' }}>
      <div onClick={toggleAsideVisibilityHandler}>눌러</div>
    </CameraHeaderTop>
  );
};

export default CameraHeader;
