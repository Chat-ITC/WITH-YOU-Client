import styled from 'styled-components';

//Writing
export const WritingContainer = styled.div`
  overscroll-behavior-y: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  right: 0;
  background-color:white;
  z-index: 50;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
`;

export const BottomEmptyBox = styled.div`
  width: 100px;
  height: 80px;
`;

export const TopEmptyBox = styled.div`
  width: 300px;
  height: 65px;
`;

//headerTop
export const WritingHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  right:0;
  left: 0;
  height: 65px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #bababa;
`;

export const WritingSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FileImg = styled.img`
  margin-top: 5px;
  width: 25px;
  height: 25px;
`;

export const WritingBtn = styled.div`
  background-color: #fff;
  padding: 12px;
  border: 1px solid #bababa;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
`;

export const File = styled.input`
  background-image: url({file});
  background-color: yellow;
`;

//input
export const TitleInput = styled.input`
  background-color: #fff;
  width: 100%;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  color: #000;
  border: none;
  outline: none;
`;

export const ContentInput = styled.textarea`
  background-color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  width: 97%;
  height: 68%;
  vertical-align: top;
  border: none;
  outline: none;
`;