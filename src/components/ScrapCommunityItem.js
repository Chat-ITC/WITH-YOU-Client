//style
import {
    CommunityItemContainer,
    CommunityItemTitle,
    CommunityItemBody,
    CommunityItemBottom,
    CommunityDateContainer,
    CommunityItemTopContainer,
    CommunityItemScrap,
    ChatImg,
    ChatContent,
    ChatContainer,
    CommunityItemPicture
} from './style';
//img
import Chat from '../assets/chat.png';
import star from '../assets/FillStar.svg';
import picture from '../assets/picture.png';


//library
import React, { useState } from 'react';

const ScrapCommunityItem = (props) => {
    return (
        <>
            {(props.title.includes(props.searchWord) || props.content.includes(props.searchWord)) && (
                <div>
                    <CommunityItemContainer>
                        <CommunityItemTopContainer>
                            <CommunityItemTitle>
                                {props.title}
                            </CommunityItemTitle>
                            {props.img === 'nothing' ? <></> : <CommunityItemPicture $picture={picture} />}
                        </CommunityItemTopContainer>
                        <CommunityItemBody>
                            {props.content}
                        </CommunityItemBody>
                        <CommunityItemBottom>
                            {/* {props.like > 0 && (
                                <LikeContainer>
                                    <LikeImg src={Like} alt="좋아요 버튼" />
                                    <LikeContent>
                                        {props.like}
                                    </LikeContent>
                                </LikeContainer>
                            )} */}
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
                                <img src={star} alt="스크랩" width="13"/>
                                {props.createdDateMonth}/{props.createdDateDay}
                            </CommunityDateContainer>
                        </CommunityItemBottom>
                    </CommunityItemContainer>
                </div>
            )}
        </>
    );
}

export default ScrapCommunityItem;