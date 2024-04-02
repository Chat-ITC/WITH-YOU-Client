import styled, { css } from 'styled-components';
import picture from '../../assets/picture.png';
import fillStar from '../../assets/FillStar.svg';

//CommunityItem
export const CommunityItemContainer = styled.div`
  width: 275px;
  height: 70px;
  padding: 10px 10px 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
`;

export const CommunityItemTopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  line-height: 20px;
  gap: 5px;
`;

export const CommunityItemTitle = styled.div` 
  font-weight: bold;
  font-size: 17px; 
  height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: none;
`;

export const CommunityItemPicture = styled.div`
  width: 0px;
  height: 0px;
  margin: auto 3px auto 0px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: none;
  ${props => props.$picture && css`
        background-image: url(${picture});
        width: 16px;
        height: 16px;
    `}
`;

export const CommunityItemBody = styled.div`
  margin-top: 8px;
  width: 265px;
  line-height: 23px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CommunityItemBottom = styled.div`
  display: flex;
  width: 280px;
  height: 20px;
  justify-content: flex-start;
  align-content: center;
  gap: 5px;
`;

export const CommunityDateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: grey;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  gap: 3px;
`

export const CommunityItemScrap = styled.div`
  width: 0px;
  height: 0px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: none;
  ${props => props.$scrap && css`
        background-image: url(${fillStar});
        width: 16px;
        height: 16px;
    `}
`

export const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  line-height: 20px;
  gap: 5px;
`;

export const CommunityLikeContainer = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  line-height: 20px;
  gap: 5px;
`;

export const ScrapImg = styled.img`
  width: 14px;
  height: 14px;
`;

export const ScrapContent = styled.span`
  font-size: 12px;
`;

export const LikeImg = styled.img`
  width: 14px;
  height: 14px;
`;
export const LikeContent = styled.span`
  font-size: 12px;
`;


export const ChatContent = styled.span`
  font-size: 12px;
`;

export const ChatImg = styled.img`
  width: 14px;
  height: 13px;
`;

export const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  line-height: 20px;
  gap: 5px;
`;