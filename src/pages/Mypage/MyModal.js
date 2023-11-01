//style
import {
  ModalBody,
  Mask,
  Content,
  ModalTItle,
  ModalSetBtn,
  ModalCloseBtn,
  NickBtnBox,
} from "./style";
//library
import React, { useState } from "react";
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
//components
import TextInput from '../../components/TextInput';

const MyModal = ({ onClose }) => {
  //닉네임 설정
  const [nickName, setNickName] = useState('');

  const handleChangeNickName = async () => {
    const name = { nickName: nickName };
    console.log(`닉네임: ${nickName}`);
    console.log(`닉네임 Json: `, name)
    try {
      await axiosInstance.patch('/member/update', name);
      alert("닉네임이 성공적으로 변경되었습니다.");
      window.location.replace("/mypage");

    } catch (error) {
      alert("이미 존재하는 닉네임입니다.");
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
              onClick={() => {
                handleChangeNickName()
                onClose()
              }}>
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