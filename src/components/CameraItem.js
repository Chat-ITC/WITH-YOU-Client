//style
import {
    CameraItemContainer,
    CameraItemTitle,
    CameraItemScrap,
    CameraItemBody,
    CameraItemBottom,
    DateContainer,
} from './style';

//library
import React, { useState } from 'react';

const CameraItem = (props) => {
    const [scrapState, setScrapState] = useState(props.$scrap);

    
    return (
        <div>
            <CameraItemContainer>
                <CameraItemTitle>
                    {props.title}
                </CameraItemTitle>
                <CameraItemBody>
                    {props.body}
                </CameraItemBody>
                <CameraItemBottom>
                    <CameraItemScrap $done={scrapState} />
                    <DateContainer>
                        {props.date}
                    </DateContainer>
                </CameraItemBottom>

            </CameraItemContainer>
        </div>
    );
}

export default CameraItem;