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
    chatContainer,
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
                            <img src={Like} alt="좋아요 버튼" width="14"/>
                            {props.like}
                        </LikeContainer>
                    )}
                    {props.chat > 0 && (
                        <chatContainer>
                            <img src={Chat} alt="댓글 버튼" width="14"/>
                            {props.chat}
                        </chatContainer>
                    )}
                    <CommunityItemScrap $scrap={scrap}/>
                    <CommunityDateContainer>
                        {props.date}
                    </CommunityDateContainer>
                </CommunityItemBottom>
            </CommunityItemContainer>
        </div>
    );
}

export default CommunityItem;