import { 
  LogoContainer,
  ScrapBodyDataContainer,
  BodyTitle
} from './style'

import React from "react";

const LogoBody = (props) => {

    return (
        <>
            {props.bodyData === "0" ?
                <LogoContainer>
                  WITH
                </LogoContainer>
                :
                <ScrapBodyDataContainer>
                  <BodyTitle>{props.title}</BodyTitle>
                  {props.bodyData}
                </ScrapBodyDataContainer>
            }
        </>
    );
}

export default LogoBody;