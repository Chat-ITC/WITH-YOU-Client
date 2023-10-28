import {
  WritingContainer,
  WritingHeaderTop,
  WritingBtn,
  TopEmptyBox,
  TitleInput,
  ContentInput,
  FileImg,
  File,
  WritingSet,
} from './style';

//img
import xbtn from '../../assets/xbtn.png';
import file from '../../assets/picture.png';

//library
import {Link} from 'react-router-dom';

const Writing = () => {
  //가상키보드로 생기는 화면 가려짐 방지
  return (
    <WritingContainer>
      <TopEmptyBox/>
      <WritingHeaderTop>
        <Link to="/community">
          <img src={xbtn} alt="글쓰기 종료 버튼" width="35"/>
        </Link>
        <WritingSet>
          <label htmlFor="fileinput">
            <FileImg src={file} alt="사진 첨부" />
          </label>
          <File type="file" id="fileinput" style={{display: 'none'}}/>
          <WritingBtn>
            글 작성
          </WritingBtn>
        </WritingSet>
      </WritingHeaderTop>
      <TitleInput type="text" placeholder='제목'/>
      <ContentInput type="text" placeholder='내용을 입력해 주세요'/>
    </WritingContainer>
  );
}

export default Writing;