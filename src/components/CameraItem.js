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

const CameraItem = (props) => {
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
                            {props.date}
                        </CameraDateContainer>
                    </CameraItemBottom>

                </CameraItemContainer>
            )}
        </>
    );
}

export default CameraItem;