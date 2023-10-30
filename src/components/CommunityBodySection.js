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
//img
import Like from '../assets/like.png';
import Star from '../assets/FillStar.svg';
import Chat from '../assets/chat.png';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';

const CommunityBodySection = (props) => {

  const selectorBodyData = useSelector((state) => state.CameraItemId.bodyData);
    const onlyScrapState = useSelector((state) => state.CameraItemId.scrap);
  //스크랩
  const dispatch = useDispatch();
    const scrapBtnHandler = async () => {
        try {
            const response = await axiosInstance.patch(`/scrap/${selectorBodyData.id}`);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
        if (onlyScrapState === 'YES') {
            dispatch(scrapId('NO'));
        }
        else {
            dispatch(scrapId('YES'));
        }
    }

  //댓글 입력
  const [comment, setComment] = useState('');

  const handleSend = async () => {
    try{
      const response = await axiosInstance.post('', comment);
      console.log('댓글 확인: ', response);
    }catch (error) {
      console.log(error);
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
        {props.bodyData === "camera" ? 
          <LogoContainer>
            WITH
          </LogoContainer> 
        :
        <CommunityBodyContainer>
          <CommunityScrapBtn
                        onClick={scrapBtnHandler}
                        $scrapState={onlyScrapState} />
        <CommunityContent>
            <CommunityTitle>{props.title}</CommunityTitle>
            <UserData>
              <UserDataSpan>{props.nickname}</UserDataSpan>
              <UserDataSpan>{props.major}</UserDataSpan>
              <UserDataSpan>{props.date}</UserDataSpan>
              <CommunityBody>
                {props.body}
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
                <Textarea ref={textarea} onChange={(e) => {
                  handleResizeHeight(e)
                }} placeholder='댓글을 작성해 주세요' value={comment}></Textarea>
                <TextImg alt="댓글 보내는 버튼" onClick={handleSend}/>
              </TextBox>
              <CommunityChatContainer>
                <ChatImg src={Chat} alt="댓글 버튼" width="14"/>
                <ChatContent>
                  전체 댓글 {props.chat}개
                </ChatContent>
              </CommunityChatContainer>
              <CommentContainer>
                <ChatUser>{props.commentnickname}</ChatUser>
                <ChatUserMajor>{props.commentmajor}</ChatUserMajor>
                <ChatBody>
                  {props.commentbody}
                </ChatBody>
                <ChatDate>{props.commentdate}</ChatDate>
              </CommentContainer>
            </CommentBox>
          </InputChatBox>
          </CommunityBodyContainer>        
      }       
      </>
    );
}

export default CommunityBodySection;