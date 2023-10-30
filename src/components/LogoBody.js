import { 
  LogoContainer,
  ScrapBodyDataContainer
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
                <ScrapBodyDataContainer>{props.bodyData}</ScrapBodyDataContainer>
            }
        </>
    );
}

export default LogoBody;