import {
  WritingContainer,
  WritingHeaderTop,
  WritingBtn,
  BottomEmptyBox,
  TopEmptyBox,
  TitleInput,
  ContentInput,
} from './style';

//img
import xbtn from '../../assets/xbtn.png';

//library
import {Link} from 'react-router-dom';

const Writing = () => {
  return (
    <WritingContainer>
      <TopEmptyBox/>
      <WritingHeaderTop>
        <Link to="/community">
          <img src={xbtn} alt="글쓰기 종료 버튼" width="35"/>
        </Link>
        <WritingBtn>
          글 작성
        </WritingBtn>
      </WritingHeaderTop>
      <TitleInput type="text" placeholder='제목'/>
      <ContentInput type="text" placeholder='내용을 입력해 주세요'/>
      <BottomEmptyBox/>
    </WritingContainer>
  );
}

export default Writing;