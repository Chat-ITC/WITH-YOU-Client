import { 
  CommunityBodyContainer,
  CommunityContent,
  LikeChatBox,
  InputChatBox,
  CommunityTitle,
  UserData,
  UserDataSpan,
  CommunityBody,
  LikeBtn,
  ScrapBtn,
  BtnImg,
  BtnText,
  Textarea,
  CommentBox,
  TextBox,
  TextImg,
} from './style'
import React from "react";
import { useRef } from 'react';
//img
import Like from '../assets/like.png';
import Star from '../assets/FillStar.png';
import Send from '../assets/send.png';

const CommunityBodySection = (props) => {

  //useRef를 이용해 높이를 조절하고자 하는 textarea 엘리먼트에 ref를 지정해 style 조절
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';//height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  }
  console.log(props);
    return (
        <CommunityBodyContainer>
          <CommunityContent>
            <CommunityTitle>운영체제 스레드 부분 궁금한 거 있어요</CommunityTitle>
            <UserData>
              <UserDataSpan>감흥없는 김밥</UserDataSpan>
              <UserDataSpan>의료IT공학과</UserDataSpan>
              <UserDataSpan>10월 21일</UserDataSpan>
              <CommunityBody>
                저번주 운영체제 수업을 빠져서 그러는데요..<br/>
                스레드를 사용하는 이유를 잘 모르겠어요.<br/>
                스레드를 사용하면 좋은점이 뭔가요? <br/>
                스레드와 프로세스의 차이점도 궁금해요.<br/>
              </CommunityBody>
            </UserData>
          </CommunityContent>
          <LikeChatBox>
            <LikeBtn>
              <BtnImg src={Like} alt="좋아요 버튼" />
              <BtnText>
                좋아요
              </BtnText>
            </LikeBtn>
            <ScrapBtn>
                <BtnImg src={Star} alt="스크랩 버튼"/>
              <BtnText>
                스크랩
              </BtnText>
              </ScrapBtn>
          </LikeChatBox>
          <InputChatBox>
            <CommentBox>
              <div>좋아요 1개</div>
              <TextBox>
                <Textarea ref={textarea} onChange={handleResizeHeight} rows="1" placeholder='댓글을 작성해 주세요'></Textarea>
                <TextImg alt="댓글 보내는 버튼">
                </TextImg>
              </TextBox>
            </CommentBox>
          </InputChatBox>
        </CommunityBodyContainer>
    );
}

export default CommunityBodySection;