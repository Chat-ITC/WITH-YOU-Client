//style
import {
  ItemContainer,
  TextContent,
} from './style';
//library
import React from 'react';
//img
import checkBoxImg from '../assets/checkbox.png';
import UnCheckBoxImg from '../assets/uncheckbox.png';

const RequestCheckBox = ({onClick, content, id, $done }) => {
 
  const imgRadio = $done ? checkBoxImg : UnCheckBoxImg;
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