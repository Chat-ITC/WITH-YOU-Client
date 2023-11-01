//style
import {
    CameraItemContainer,
    CameraItemTitle,
    CameraItemScrap,
    CameraItemBody,
    CameraItemBottom,
    CameraDateContainer,
} from './style';

//library
import React from 'react';
import { selectId, historyBody, scrapId } from '../store';
import { useDispatch } from 'react-redux';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
import ReactMarkdown from 'react-markdown';

const HistoryItemBody = (props) => {
    console.log("날짜", props);
    return (
        <>
            {(props.title.includes(props.searchWord) || props.body.includes(props.searchWord)) && (
                <CameraItemContainer>
                    <CameraItemTitle>
                        {props.title}
                    </CameraItemTitle>
                    <CameraItemBody>
                        {props.body}
                    </CameraItemBody>
                    <CameraItemBottom>
                        <CameraDateContainer>
                            <CameraItemScrap $done={props.$scrap} />
                            <ReactMarkdown>
                            </ReactMarkdown>
                            {props.createdDateMonth}/{props.createdDateDay}
                        </CameraDateContainer>
                    </CameraItemBottom>

                </CameraItemContainer>
            )}
        </>
    );
}

export default HistoryItemBody;