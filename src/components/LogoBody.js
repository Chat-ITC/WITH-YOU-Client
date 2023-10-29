import { 
  LogoContainer
} from './style'

import React from "react";

const LogoBody = (props) => {
    
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

export default LogoBody;