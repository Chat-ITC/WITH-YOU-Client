import { 
  LogoContainer,
  ScrapBodyDataContainer
} from './style'

import React from "react";

const LogoBody = (props) => {
    console.log("바디데이터 입니다.", props);
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