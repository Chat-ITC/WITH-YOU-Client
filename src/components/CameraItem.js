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

const CameraItem = (props) => {

    const dispatch = useDispatch();
    const bodySectionHandler = async (propsId) => {
        if (propsId !== '0') {
            try {
                const response = await axiosInstance.get('/question',
                    { params: { id: propsId } });
                console.log(response);
                dispatch(selectId(propsId))
                dispatch(historyBody(response.data))
                dispatch(scrapId(response.data.isScrap));   
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            {(props.title.includes(props.searchWord) || props.body.includes(props.searchWord)) && (
                <CameraItemContainer
                    onClick={() => {
                        bodySectionHandler(props.id)
                    }}>
                    <CameraItemTitle>
                        {props.title}
                    </CameraItemTitle>
                    <CameraItemBody>
                        {props.body}
                    </CameraItemBody>
                    <CameraItemBottom>
                        <CameraDateContainer>
                            <CameraItemScrap $done={props.$scrap} />
                            {props.date}
                        </CameraDateContainer>
                    </CameraItemBottom>

                </CameraItemContainer>
            )}
        </>
    );
}

export default CameraItem;