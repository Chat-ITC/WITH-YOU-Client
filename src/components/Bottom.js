//style
import {
  BottomFix,
  ImgBtn,
  Ul,
} from './style';
//library
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { historyBody } from '../store';

//img
import UnHome from '../assets/emptyHome.png';
import Home from '../assets/emptyHome2.svg';
import Star from '../assets/star.png';
import Community from '../assets/Community.png';
import Community2 from '../assets/Community2.svg';
import Star2 from '../assets/star2.svg';
import UserIcon3 from '../assets/userIcon3.svg';

const Bottom = () => {
  const dispatch = useDispatch();

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
              onClick={() => { dispatch(historyBody({ content: "camera" })); }}
              src={isActive("/home") || isActive("/capture") ? Home : UnHome}
              alt="홈"
              /*isActive가 true이면 1 false이면 0.3*/
              style={{
                opacity: isActive("/home") || isActive("/capture") ? 1 : 0.3,
              }}
            />
          </li>
        </NavLink>
        <NavLink to="/scrap">
          <li>
            <ImgBtn
              src={isActive("/scrap") ? Star2 : Star}

              alt="스크랩"
              style={{
                opacity: isActive("/scrap") ? 1 : 0.3,
              }}
            />
          </li>
        </NavLink>
        <NavLink to="/community">
          <li>
            <ImgBtn
              src={isActive("/community") ? Community2 : Community}
              alt="커뮤니티"
              style={{ opacity: isActive("/community") ? 1 : 0.3 }}
            />
          </li>
        </NavLink>
        <NavLink to="/mypage">
          <li>
            <ImgBtn
              src={UserIcon3}
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