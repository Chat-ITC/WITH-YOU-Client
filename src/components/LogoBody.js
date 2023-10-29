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
                <p>{props.bodyData}</p>
            }
        </>
    );
}

export default LogoBody;