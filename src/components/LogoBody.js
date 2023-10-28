import { 
  LogoContainer
} from './style'

import React from "react";

const CameraBodySection = (props) => {
    
    return (
        <>
            {props.bodyData === "camera" ?
                <LogoContainer>
                  WITH
                </LogoContainer>
                :
                props.bodyData
            }
        </>
    );
}

export default CameraBodySection;