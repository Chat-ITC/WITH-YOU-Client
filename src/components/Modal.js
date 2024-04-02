//style
import {
  ModalBody,
  Mask,
  Content,
  ModalTItle,
  ModalSetBtn,
  ModalCloseBtn,
  NickBtnBox,
  ModalInput,
} from "./style";
//library
import React, {useState} from "react";
import { useNavigate } from "react-router";
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
//components
import TextInput from './TextInput';

const Modal = ({onClose, onContentChange}) => {
  const navigate = useNavigate();
  //제목 설정
  const [content, setContent] = useState('');

  const handleChangeContent = async () => {
    if(content.trim() !== ""){
      onContentChange(content);
    }
    // const title = { content: content };
    // console.log(`제목: ${content}`);
    // console.log(`제목 Json: `, title)
    // try {
    //   await axiosInstance.patch('/member/update', title);
    //   alert("제목이 성공적으로 변경되었습니다.");

    // } catch (error) {
    //   alert("세션이 만료되었습니다. 다시 로그인해 주세요");
    //   navigate("/");      
    // }
  };

  
  return (
    <div>
      <Mask onClick={()=>{
                  onClose();
                }}></Mask>
      <ModalBody>
          <Content>
            <ModalTItle>추가할 요구사항을 입력하세요</ModalTItle>
            <TextInput
              placeholder={"요구사항 입력"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <ModalInput>질문을 상세화하여 요청해주세요</ModalInput>
            <NickBtnBox>
              <ModalSetBtn
                onClick={()=>{
                  handleChangeContent();
                  onClose();
                }}>
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