import { 
  CommunityBodyContainer,
  LikeBox,
  
} from './style'

import React from "react";

const CommunityBodySection = (props) => {
  console.log(props);
    return (
        <>
        <CommunityBodyContainer>
          {props.bodyData}
        </CommunityBodyContainer>
        </>
    );
}

export default CommunityBodySection;