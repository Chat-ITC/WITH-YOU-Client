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
  CommunityLikeContainer,
  LikeImg,
  LikeContent,
  ChatImg,
  CommunityChatContainer,
  ChatContent,
  CommentContainer,
  ChatUser,
  ChatUserGrade,
  ChatBody,
  ChatDate,
} from './style'
import React from "react";
import { useRef } from 'react';
//img
import Like from '../assets/like.png';
import Star from '../assets/FillStar.png';
import Chat from '../assets/chat.png';

const CommunityBodySection = (props) => {
  console.log(`커뮤니티 데이터: ${props.title}`)
  //useRef를 이용해 높이를 조절하고자 하는 textarea 엘리먼트에 ref를 지정해 style 조절
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';//height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  }
  console.log(`유저 id: ${props.bodyData}`);
    return (
        <CommunityBodyContainer>
          <CommunityContent>
            <CommunityTitle>{props.title}</CommunityTitle>
            <UserData>
              <UserDataSpan>감흥없는 김밥</UserDataSpan>
              <UserDataSpan>의료IT공학과</UserDataSpan>
              <UserDataSpan>10월 21일{props.date}</UserDataSpan>
              <CommunityBody>
                저번주 운영체제 수업을 빠져서 그러는데요..<br/>
                스레드를 사용하는 이유를 잘 모르겠어요.<br/>
                스레드를 사용하면 좋은점이 뭔가요? <br/>
                스레드와 프로세스의 차이점도 궁금해요.스레드와 프로세스의 차이점도 궁금해요.스레드와 프로세스의 차이점도 궁금해요.스레드와 프로세스의 차이점도 궁금해요.스레드와 프로세스의 차이점도 궁금해요.스레드와 프로세스의 차이점도 궁금해요.
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
              <CommunityLikeContainer>
                <LikeImg src={Like} alt="좋아요 버튼"/>
                <LikeContent>
                    좋아요 {props.like}개
                </LikeContent>
              </CommunityLikeContainer>  
              <TextBox>
                <Textarea ref={textarea} onChange={handleResizeHeight} placeholder='댓글을 작성해 주세요'></Textarea>
                <TextImg alt="댓글 보내는 버튼">
                </TextImg>
              </TextBox>
              <CommunityChatContainer>
                <ChatImg src={Chat} alt="댓글 버튼" width="14"/>
                <ChatContent>
                  전체 댓글 {props.chat}개
                </ChatContent>
              </CommunityChatContainer>
              <CommentContainer>
                <ChatUser>지 성 인{props.nickname}</ChatUser>
                <ChatUserGrade>의료IT공학과{props.grade}</ChatUserGrade>
                <ChatBody>
                  프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 
                </ChatBody>
                <ChatDate>10월 21일{props.date}</ChatDate>
              </CommentContainer>
              <CommentContainer>
                <ChatUser>지 성 인{props.nickname}</ChatUser>
                <ChatUserGrade>의료IT공학과{props.grade}</ChatUserGrade>
                <ChatBody>
                  프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 
                </ChatBody>
                <ChatDate>10월 21일{props.date}</ChatDate>
              </CommentContainer>
              <CommentContainer>
                <ChatUser>지 성 인{props.nickname}</ChatUser>
                <ChatUserGrade>의료IT공학과{props.grade}</ChatUserGrade>
                <ChatBody>
                  프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 프로세스의스레드는 
                </ChatBody>
                <ChatDate>10월 21일{props.date}</ChatDate>
              </CommentContainer>
            </CommentBox>
          </InputChatBox>
        </CommunityBodyContainer>
    );
}

export default CommunityBodySection;