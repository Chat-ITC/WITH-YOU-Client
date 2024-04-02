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
  ChatUserLevel,
  ChatUser,
  ChatUserMajor,
  ChatBody,
  ChatDate,
  LogoContainer,
  CommentUserBox,
  CommunityScrapBtn,
  CommunityImg
} from './style';
//library
import React, { useRef, useState } from 'react';
import { scrapId, commentBody } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
//img
import Like from '../assets/like.png';
import Star from '../assets/FillStar.svg';
import Chat from '../assets/chat.png';

const CommunityBodySection = (props) => {
  const idState = useSelector((state) => state.CameraItemId.id);
  const selectorBodyData = useSelector((state) => state.CameraItemId.bodyData);
  const selectorCommentData = useSelector((state) => state.CameraItemId.commentData);
  const onlyScrapState = useSelector((state) => state.CameraItemId.scrap);
  const imgURL = useSelector((state) => state.CameraItemId.imgURL);
  
  const dispatch = useDispatch();

  const sendScrapHandler = async () => {
    try{
      const response = await axiosInstance.post(`/scrap/post/${idState}`);
      alert("스크랩이 완료되었습니다!");
    } catch (error) {
      if(error.response.status === 400){
        alert("이미 스크랩 된 글입니다.");
      }
      console.log('스크랩 실패: ', error.response.data.message);
    }
  }
  

  //댓글 입력
  const [comment, setComment] = useState('');
  const handleSend = async () => {
    try{
      const response = await axiosInstance.post(`/comment/regist/${idState}`, { content: comment });
      //window.location.replace("/community");
      dispatch(commentBody(response.data.commentResponseDto));
      setComment('');
      console.log("댓글: ", response.data.commentResponseDto);  
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

    return (
      <>
        {selectorBodyData.content === "camera" ? 
          <LogoContainer>
            WITH
          </LogoContainer> 
        :
        <CommunityBodyContainer>
        <CommunityContent>
            <CommunityTitle>{selectorBodyData.title}</CommunityTitle>
            <UserData>
              <UserDataSpan>{selectorBodyData.userNickName}</UserDataSpan>
              <UserDataSpan>{selectorBodyData.userMajor}</UserDataSpan>
              <UserDataSpan>{selectorBodyData.createdDate[1]}/{selectorBodyData.createdDate[2]}</UserDataSpan>
              <CommunityBody>{selectorBodyData.content}</CommunityBody>
              {imgURL === 'nothing' ? <div></div> : <CommunityImg src={imgURL} alt='받은 사진'/>}
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
                  전체 댓글 {selectorBodyData.commentCount}개
                </ChatContent>
              </CommunityChatContainer>
              {selectorCommentData && selectorCommentData.map((comment, index) => (
                <div key={index}>
                  <CommentContainer>
                    <CommentUserBox>
                    <ChatUserLevel
                    level={comment.userLevel}>
                    </ChatUserLevel>
                    <ChatUser>{comment.userNickName}</ChatUser>
                    <ChatUserMajor>{comment.userMajor}</ChatUserMajor>
                    </CommentUserBox>
                    <ChatBody>{comment.content}</ChatBody>
                    <ChatDate>{comment.createdDate[1]}/{comment.createdDate[2]}</ChatDate>
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