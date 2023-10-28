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

    const [bodyData, setBodyData] = useState("camera");

    const bodySectionHandler = (props) => {
        //목록에서 아이템 누를 시 서버로 id 전송후 데이터 받아오기 props: 아이디.
        setBodyData(`아이템 아이디: ${props}`)
    }

    return (
        <div onClick={() => {
            bodySectionHandler(props.id)
            }}>
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