import {
  CommunityBodyContainer,
  CommunityContent,
  LikeChatBox,
  InputChatBox,
  CommunityTitle,
  UserData,
  UserDataSpan,
  CommunityBody,
  ScrapBtn,
  BtnImg,
  BtnText,
  Textarea,
  CommentBox,
  TextBox,
  TextImg,
  ChatImg,
  CommunityChatContainer,
  ChatContent,
  CommentContainer,
  ChatUser,
  CommunityImg,
  ChatUserMajor,
  ChatBody,
  ChatDate,
  LogoContainer,
} from './style';
//library
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
//img
import Star from '../assets/FillStar.svg';
import Chat from '../assets/chat.png';

const ScrapCommunityBodySection = (props) => {
  const onlyScrapState = useSelector((state) => state.CameraItemId.scrap);
  const imgURL = useSelector((state) => state.CameraItemId.imgURL);

  const sendScrapHandler = async () => {
    try {
      const response = await axiosInstance.post(`/scrap/post/${props.id}`);
      alert("스크랩이 완료되었습니다!");
    } catch (error) {
      if (error.response.status === 400) {
        alert("이미 스크랩 된 글입니다");
      }
      console.log('스크랩 실패: ', error.response.data.message);
    }
  }

  //댓글 입력
  const [comment, setComment] = useState('');
  const handleSend = async () => {
    try {
      const response = await axiosInstance.post(`/comment/regist/${props.id}`, { content: comment });
      window.location.replace("/scrap");
      console.log("댓글: ", response);
    } catch (error) {
      console.log(error);
    }
  }
  //useRef를 이용해 높이를 조절하고자 하는 textarea 엘리먼트에 ref를 지정해 style 조절
  const textarea = useRef();

  const handleResizeHeight = (e) => {
    setComment(e.target.value);
    textarea.current.style.height = 'auto';//height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  return (
    <>
      {props.content === "0" ?
        <LogoContainer>
          WITH
        </LogoContainer>
        :
        <CommunityBodyContainer>
          <CommunityContent>
            <CommunityTitle>{props.title}</CommunityTitle>
            <UserData>
              <UserDataSpan>{props.userNickName}</UserDataSpan>
              <UserDataSpan>{props.userMajor}</UserDataSpan>
              <UserDataSpan>{props.createdDateMonth[1]}/{props.createdDateMonth[2]}</UserDataSpan>
              <CommunityBody>{props.content}</CommunityBody>
              {imgURL === 'nothing' ? <div></div> : <CommunityImg src={imgURL} alt='받은 사진' />}
            </UserData>
          </CommunityContent>

          <LikeChatBox>
            {/* <LikeBtn>
              <BtnImg src={Like} alt="좋아요 버튼" />
              <BtnText>
                좋아요
              </BtnText>
            </LikeBtn> */}
            <ScrapBtn
              onClick={sendScrapHandler}
              $scrapState={onlyScrapState}>
              <BtnImg src={Star} alt="스크랩 버튼" />
              <BtnText>
                스크랩
              </BtnText>
            </ScrapBtn>
          </LikeChatBox>
          <InputChatBox>
            <CommentBox>
              <TextBox>
                <Textarea ref={textarea} onChange={(e) => {
                  handleResizeHeight(e)
                }} placeholder='댓글을 작성해 주세요' value={comment}></Textarea>
                <TextImg alt="댓글 보내는 버튼" onClick={handleSend} />
              </TextBox>

              <CommunityChatContainer>
                <ChatImg src={Chat} alt="댓글 버튼" width="14" />
                <ChatContent>
                  전체 댓글 {props.commentCount}개
                </ChatContent>
              </CommunityChatContainer>
              {Array.isArray(props.comments) && props.comments.map((comment, index) => (
                <div key={index}>
                  <CommentContainer>
                    <ChatUser>{comment.userNickName}</ChatUser>
                    <ChatUserMajor>{comment.userMajor}</ChatUserMajor>
                    <ChatBody>{comment.content}</ChatBody>
                    <ChatDate>{props.createdDateMonth[1]}/{props.createdDateMonth[2]}</ChatDate>
                  </CommentContainer>
                </div>
              ))}
            </CommentBox>
          </InputChatBox>
        </CommunityBodyContainer>
      }
    </>
  );
}

export default ScrapCommunityBodySection;