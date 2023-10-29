//style
import {
  ItemContainer,
  TextContent,
} from './style';
//library
import React, { useState } from 'react';
//img
import checkBoxImg from '../assets/checkbox.png';
import UnCheckBoxImg from '../assets/uncheckbox.png';

const RequestCheckBox = ({content, id, $done, onClick}) => {
  const imgRadio = $done ? checkBoxImg : UnCheckBoxImg;
  console.log("상태확인: ", $done);
  console.log("아이디 확인: ", id);  
  const handleCheckBoxClick = () => {
    onClick(id); // 클릭 시 해당 아이디를 사용하여 onClick함수 호출
  };
  return(
    <ItemContainer onClick={handleCheckBoxClick}>
      <TextContent>{content}</TextContent>
      <img src={imgRadio} alt={imgRadio} width="25px" height="25px" />
    </ItemContainer>
  );
}

export default RequestCheckBox;