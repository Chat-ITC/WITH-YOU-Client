import { 
  LogoContainer,
  ScrapBodyDataContainer,
  BodyTitle,
  LogoBodyContent
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
                  <LogoBodyContent>
                    {props.bodyData}
                  </LogoBodyContent>
                </ScrapBodyDataContainer>
            }
        </>
    );
}

export default LogoBody;