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
import React, {useState} from "react";
import { useNavigate } from "react-router";
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
//components
import TextInput from './TextInput';

const Modal = ({onClose}) => {
  const navigate = useNavigate();
  //제목 설정
  const [content, setContent] = useState('');

  const handleChangeContent = async () => {
    const title = { content: content };
    console.log(`제목: ${content}`);
    console.log(`제목 Json: `, title)
    try {
      await axiosInstance.patch('/member/update', title);
      alert("제목이 성공적으로 변경되었습니다.");

    } catch (error) {
      alert("세션이 만료되었습니다. 다시 로그인해 주세요");
      navigate("/");      
    }
  };

  
  return (
    <div>
      <Mask onClick={()=>{
                  onClose();
                }}></Mask>
      <ModalBody>
          <Content>
            <ModalTItle>제목을 변경하세요</ModalTItle>
            <TextInput
              placeholder={"제목을 변경하세요"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <NickBtnBox>
              <ModalSetBtn
                onClick={handleChangeContent}>
                설정
              </ModalSetBtn>
              <ModalCloseBtn 
                onClick={()=>{
                  onClose();
                }}>
                닫기
              </ModalCloseBtn>
            </NickBtnBox>
          </Content>
      </ModalBody>
    </div>
  );
};

export default Modal;