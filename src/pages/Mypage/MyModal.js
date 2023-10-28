//MyModal.js
import React from "react";
import {
  ModalBody,
  Mask,
  Content,
  ModalTItle,
  ModalSetBtn,
  ModalCloseBtn,
  NickBtnBox,
  } from "./style";

  import TextInput from '../../components/TextInput';
  import { useState } from 'react';
  import { useNavigate } from "react-router";
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';

const MyModal = ({onClose}) => {
    const [nickName, setNickName] = useState('');
    const navigate = useNavigate();

  const handleChangeNickName = async () => {
    const name = { nickName: nickName };
    console.log(`닉네임: ${nickName}`);
    console.log(`닉네임 Json: `, name)
    try {
      await axiosInstance.patch('/member/update', name);
      alert("닉네임이 성공적으로 변경되었습니다.");

    } catch (error) {
      alert("세션이 만료되었습니다. 다시 로그인해 주세요");
      navigate("/");      
    }
  };

  
  return (
    <div>
      <Mask onClick={onClose}></Mask>
      <ModalBody>
          <Content>
            <ModalTItle>닉네임 설정</ModalTItle>
            <TextInput
              placeholder={"닉네임"}
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
            <NickBtnBox>
              <ModalSetBtn
                onClick={handleChangeNickName}>
                설정
              </ModalSetBtn>
              <ModalCloseBtn 
                onClick={onClose}>
                닫기
              </ModalCloseBtn>
            </NickBtnBox>
          </Content>
      </ModalBody>
    </div>
  );
};

export default MyModal;