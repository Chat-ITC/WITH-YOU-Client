//style
import {
    CommunityItemContainer,
    CommunityItemTitle,
    CommunityItemBody,
    CommunityItemBottom,
    CommunityDateContainer,
    CommunityItemTopContainer,
    CommunityItemPicture,
    CommunityItemScrap,
    LikeContainer,
    LikeImg,
    LikeContent,
    ChatImg,
    ChatContent,
    ChatContainer,
} from './style';
//img
import Like from '../assets/like.png';
import Chat from '../assets/chat.png';

//library
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
import { selectId, historyBody, scrapId } from '../store';

const ScrapCommunityItem = (props) => {
    console.log("로그 확이", props);
    const dispatch = useDispatch();
    // const [picture, setPicture] = useState(props.$picture);

    
    
    return (
        <>
            {(props.title.includes(props.searchWord) || props.content.includes(props.searchWord)) && (
                <div onClick={() => {

                }}>
                    <CommunityItemContainer>
                        <CommunityItemTopContainer>
                            <CommunityItemTitle>
                                {props.title}
                            </CommunityItemTitle>
                            {/* <CommunityItemPicture $picture={picture} /> */}
                        </CommunityItemTopContainer>
                        <CommunityItemBody>
                            {props.content}
                        </CommunityItemBody>
                        <CommunityItemBottom>
                            {props.like > 0 && (
                                <LikeContainer>
                                    <LikeImg src={Like} alt="좋아요 버튼" />
                                    <LikeContent>
                                        {props.like}
                                    </LikeContent>
                                </LikeContainer>
                            )}
                            {props.commentCount > 0 && (
                                <ChatContainer>
                                    <ChatImg src={Chat} alt="댓글 버튼" width="14" />
                                    <ChatContent>
                                        {props.commentCount}
                                    </ChatContent>
                                </ChatContainer>
                            )}
                            <CommunityDateContainer>
                                <CommunityItemScrap $done={props.$scrap} />{/*isScrap인지 확인 */}
                                {props.createdDate}
                            </CommunityDateContainer>
                        </CommunityItemBottom>
                    </CommunityItemContainer>
                </div>
            )}
        </>
    );
}

export default ScrapCommunityItem;