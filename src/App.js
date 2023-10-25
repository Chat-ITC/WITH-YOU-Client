import Bottom from './components/Bottom';
import { Provider } from 'react-redux';
import store from './store';

//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from './pages/Community/Community';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Scrap from './pages/Scrap/Scrap';
import Capture from './pages/Capture/Capture';

function App() {

  return (  
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/capture" element={<Capture/>} />
          <Route path="/join" element={<Join/>} />
          <Route path="/mypage" element={<Mypage/>} />
          <Route path="/scrap" element={<Scrap/>} />
        </Routes>
        <Bottom/>
      </Router>
    </Provider>
  );
}

export default App;