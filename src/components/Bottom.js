//style
import {
  BottomFix,
  ImgBtn,
  Ul,
} from './style';
//library
import { Link } from "react-router-dom";
//img
import Home from '../assets/emptyHome.png';
import Star from '../assets/star.png';
import Community from '../assets/Community.png';
import UserIcon from '../assets/userIcon2.png';

const Bottom = () => {
  return (
    <BottomFix>
      <Ul>
        <Link to="/home">
          <li>
            <ImgBtn src={Home} alt="홈" />
          </li>
        </Link>
        <Link to="/scrap">
          <li>
            <ImgBtn src={Star} alt="스크랩" />
          </li>
        </Link>
        <Link to="/community">
          <li>
            <ImgBtn src={Community} alt="커뮤니티" />
          </li>
        </Link>
        <Link to="/mypage">
          <li>
            <ImgBtn src={UserIcon} alt="내 정보" />
          </li>
        </Link>
      </Ul>
    </BottomFix>
  );
}

export default Bottom;