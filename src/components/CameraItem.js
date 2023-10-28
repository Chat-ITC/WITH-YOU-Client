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
import React, { useState } from 'react';

const CameraItem = (props) => {
    const [scrapState, setScrapState] = useState(props.$scrap);

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
                            <CameraItemScrap $done={scrapState} />
                            {props.date}
                        </CameraDateContainer>
                    </CameraItemBottom>

                </CameraItemContainer>
            )}
        </>
    );
}

export default CameraItem;