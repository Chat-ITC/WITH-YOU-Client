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

const RequestCheckBox = ({content, id}) => {
  const [isCheck, setIsCheck] = useState(false);
  function imgHandler(){
    setIsCheck(!isCheck);
  }
  return(
    <ItemContainer>
      <TextContent>{content}</TextContent>
      <img 
      src={isCheck ? checkBoxImg : UnCheckBoxImg} 
      alt="체크 버튼" 
      onClick={imgHandler} 
      width="25px"
      height="25px"/>
    </ItemContainer>
  );
}

export default RequestCheckBox;