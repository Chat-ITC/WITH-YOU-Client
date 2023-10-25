//style
import {
  BottomFix,
  ImgBtn,
  Ul,
} from './style';
//library
import { NavLink } from "react-router-dom";
//img
import Home from '../assets/emptyHome.png';
import Star from '../assets/star.png';
import Community from '../assets/Community.png';
import UserIcon from '../assets/userIcon2.png';

const Bottom = () => {
  let activeStyle = {
    opacity: 1
  }
  return (
      <BottomFix>
        <Ul>
          <NavLink to="/home"
          style={({isActive}) =>
            isActive ? activeStyle : undefined
          }>
            <li>
              <ImgBtn src={Home} alt="홈" />
            </li>
          </NavLink>
          <NavLink to="/scrap">
            <li>
                <ImgBtn src={Star} alt="스크랩" />
            </li>
          </NavLink>
          <NavLink to="/community">
            <li>
                <ImgBtn src={Community} alt="커뮤니티" />
            </li>
          </NavLink>
          <NavLink to="/mypage">
            <li>
              <ImgBtn src={UserIcon} alt="내 정보" />
            </li>
          </NavLink>
        </Ul>
      </BottomFix>
  );
}

export default Bottom;