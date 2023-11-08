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
import picture from '../assets/picture.png'

//library
import React from 'react';
import { useDispatch } from 'react-redux';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
import { selectId, historyBody, commentBody, img } from '../store';

const CommunityItem = (props) => {
    const dispatch = useDispatch();
    // const [picture, setPicture] = useState(props.$picture);

    const bodySectionHandler = async (propsId) => {
        if (propsId !== '0') {
            try {
                const response = await axiosInstance.get('/post',
                    { params: { id: propsId } });
                console.log('props.imageUrl', props.img);
                dispatch(selectId(propsId))
                dispatch(historyBody(response.data.postLookupDto))
                dispatch(img(response.data.postLookupDto.imageUrl))
                dispatch((commentBody(response.data.commentResponseDto)))
                console.log("선택한 결과: ", response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            {(props.title.includes(props.searchWord) || props.content.includes(props.searchWord)) && (
                <div onClick={() => {
                    bodySectionHandler(props.id)
                }}>
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
                                {props.date[1]}/{props.date[2]}
                            </CommunityDateContainer>
                        </CommunityItemBottom>
                    </CommunityItemContainer>
                </div>
            )}
        </>
    );
}

export default CommunityItem;