//style
import {
  BottomFix,
  ImgBtn,
  Ul,
} from './style';
//library
import { NavLink, useLocation } from "react-router-dom";
//img
import Home from '../assets/emptyHome.png';
import Star from '../assets/star.png';
import Community from '../assets/Community.png';
import UserIcon from '../assets/userIcon2.png';

const Bottom = () => {
  //현재 경로 가져오기
  const location = useLocation();
  const isActive = (path) => {
    //`location.pathname`은 ReactRouter 라이브러리에서 제공되는 특별한 변수로 웹 페이지의 경로를 나타냄
    return location.pathname === path;
  };
  return (
      <BottomFix>
        <Ul>
          <NavLink to="/home">
            {/*NavLink를 사용하면 활성화된 페이지의 isActive값이 true가 된다.*/}
            <li>
              <ImgBtn
                src={Home}
                alt="홈"
                /*isActive가 true이면 1 false이면 0.3*/
                style={{ 
                  opacity: isActive("/home") || isActive("/capture") ? 1 : 0.3,
                  color: isActive("/home") || isActive("/capture") ? '#F07878' : '#000',
                }}
              />
            </li>
        </NavLink>
          <NavLink to="/scrap">
          <li>
            <ImgBtn
              src={Star}
              alt="스크랩"
              style={{ opacity: isActive("/scrap") ? 1 : 0.3 }}
            />
          </li>
        </NavLink>
        <NavLink to="/community">
          <li>
            <ImgBtn
              src={Community}
              alt="커뮤니티"
              style={{ opacity: isActive("/community") ? 1 : 0.3 }}
            />
          </li>
        </NavLink>
        <NavLink to="/mypage">
          <li>
            <ImgBtn
              src={UserIcon}
              alt="내 정보"
              style={{ opacity: isActive("/mypage") ? 1 : 0.3 }}
            />
          </li>
        </NavLink>
        </Ul>
      </BottomFix>
  );
}

export default Bottom;