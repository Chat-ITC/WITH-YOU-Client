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
  ChatUserMajor,
  ChatBody,
  ChatDate,
  LogoContainer,
  CommunityScrapBtn,
} from './style';
//library
import React, { useRef, useState } from 'react';
import { scrapId } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
//img
import Like from '../assets/like.png';
import Star from '../assets/FillStar.svg';
import Chat from '../assets/chat.png';

const CommunityBodySection = (props) => {
  const selectorBodyData = useSelector((state) => state.CameraItemId.bodyData);
  const onlyScrapState = useSelector((state) => state.CameraItemId.scrap);
  
  const sendScrapHandler = async () => {
    try{
      const response = await axiosInstance.post(`/scrap/post/${props.id}`);
      alert("스크랩이 완료되었습니다!");
    } catch (error) {
      if(error.response.status === 400){
        alert("이미 스크랩 된 글입니다");
      }
    }
  }
  

  //댓글 입력
  const [comment, setComment] = useState('');
  const handleSend = async () => {
    try{
      const response = await axiosInstance.post(`/comment/regist/${props.id}`, { content: comment });
      window.location.replace("/community");
      console.log("댓글: ", response);
    }catch (error) {
      console.log("오류", error);
    }
  }
  //useRef를 이용해 높이를 조절하고자 하는 textarea 엘리먼트에 ref를 지정해 style 조절
  const textarea = useRef();

  const handleResizeHeight =  (e) => {
    setComment(e.target.value);
    textarea.current.style.height = 'auto';//height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const [isScrap, setIsScrap] = useState(false);
  const scrapState = () => {
    setIsScrap(!isScrap);
  }
    return (
      <>
        {selectorBodyData.content === "camera" ? 
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
              <UserDataSpan>{props.createdDate}</UserDataSpan>
              <CommunityBody>{props.content}</CommunityBody>
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
              onClick={()=>{
                
                sendScrapHandler();
                scrapState();
              }}
              $scrapState={onlyScrapState}>
                <BtnImg src={Star} alt="스크랩 버튼"/>
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
                <TextImg alt="댓글 보내는 버튼" onClick={handleSend}/>
              </TextBox>
              
              <CommunityChatContainer>
                <ChatImg src={Chat} alt="댓글 버튼" width="14"/>
                <ChatContent>
                  전체 댓글 {props.commentCount}개
                </ChatContent>
              </CommunityChatContainer>
              {props.comments && props.comments.map((comment, index) => (
                <div key={index}>
                  <CommentContainer>
                    <ChatUser>{comment.userNickName}</ChatUser>
                    <ChatUserMajor>{comment.userMajor}</ChatUserMajor>
                    <ChatBody>{comment.content}</ChatBody>
                    <ChatDate>{comment.createdDate}</ChatDate>
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

export default CommunityBodySection;