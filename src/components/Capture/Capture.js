//style
import { 
  CaptureHeaderTop,
  HeaderImgBox,
} from '../style';

import {
  Setting,
} from './style';

//img
import setting from '../assets/setting.svg';

const Capture = () => {
  return (
    <CaptureHeaderTop>
      <HeaderImgBox>
        <img src={setting} alt="세팅 버튼" width="35"/>
        <Setting>
          <option value="titleChange">이름 변경하기</option>
          <option value="copy">본문 복사하기</option>
          <option value="delete">삭제하기</option>
        </Setting>
      </HeaderImgBox>
    </CaptureHeaderTop>
  );
};

export default Capture;
