//style
import {
    CameraItemContainer,
    CameraItemTitleContainer,
    CameraItemTitle,
    CameraItemScrap,
    CameraItemBody,
    CameraItemButtom,
} from './style';

//library
import React, { useState } from 'react';

const CameraItem = (props) => {
    const [scrapState, setScrapState] = useState(props.$scrap);

    return (
        <>
            <CameraItemContainer>
                <CameraItemTitleContainer>
                    <CameraItemTitle>
                        {props.title}
                    </CameraItemTitle>

                    <CameraItemScrap
                        
                        $done={scrapState} />

                </CameraItemTitleContainer>
                <CameraItemBody>
                    {props.body}
                </CameraItemBody>
                <CameraItemButtom>
                    {props.date}
                </CameraItemButtom>

            </CameraItemContainer>
        </>
    );
}

export default CameraItem;