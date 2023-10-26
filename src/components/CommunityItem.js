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

const CommunityItem = (props) => {
    const [picture, setPicture] = useState(props.$picture);
    const [scrap, setScrap] = useState(props.$scrap);


    return (
        <div>
            <CommunityItemContainer>
                <CommunityItemTopContainer>
                    <CommunityItemTitle>
                        {props.title}
                    </CommunityItemTitle>
                    <CommunityItemPicture $picture={picture}/>
                </CommunityItemTopContainer>
                <CommunityItemBody>
                    {props.body}
                </CommunityItemBody>
                <CommunityItemBottom>
                    {props.like > 0 && (
                        <LikeContainer>
                            <LikeImg src={Like} alt="좋아요 버튼"/>
                            <LikeContent>
                                {props.like}
                            </LikeContent>
                        </LikeContainer>
                    )}
                    {props.chat > 0 && (
                        <ChatContainer>
                            <ChatImg src={Chat} alt="댓글 버튼" width="14"/>
                            <ChatContent>
                                {props.chat}
                            </ChatContent> 
                        </ChatContainer>
                    )}
                    <CommunityDateContainer>
                        <CommunityItemScrap $scrap={scrap}/>
                        {props.date}
                    </CommunityDateContainer>
                </CommunityItemBottom>
            </CommunityItemContainer>
        </div>
    );
}

export default CommunityItem;