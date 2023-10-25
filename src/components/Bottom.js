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
  return (
      <BottomFix>
        <Ul>
          <NavLink to="/home">
            {/*NavLink를 사용하면 활성화된 페이지의 isActive값이 true가 된다.*/}
          {({ isActive }) => (
            <li>
              <ImgBtn
                src={Home}
                alt="홈"
                /*isActive가 true이면 1 false이면 0.3*/
                style={{ opacity: isActive ? 1 : 0.3 }}
              />
            </li>
          )}
        </NavLink>
          <NavLink to="/scrap">
          {({ isActive }) => (
            <li>
              <ImgBtn
                src={Star}
                alt="스크랩"
                style={{ opacity: isActive ? 1 : 0.3 }}
              />
            </li>
          )}
        </NavLink>
        <NavLink to="/community">
          {({ isActive }) => (
            <li>
              <ImgBtn
                src={Community}
                alt="커뮤니티"
                style={{ opacity: isActive ? 1 : 0.3 }}
              />
            </li>
          )}
        </NavLink>
        <NavLink to="/mypage">
          {({ isActive }) => (
            <li>
              <ImgBtn
                src={UserIcon}
                alt="내 정보"
                style={{ opacity: isActive ? 1 : 0.3 }}
              />
            </li>
          )}
        </NavLink>
        </Ul>
      </BottomFix>
  );
}

export default Bottom;