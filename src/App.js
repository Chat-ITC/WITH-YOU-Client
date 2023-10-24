import Bottom from './components/Bottom';

//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from './pages/Community/Community';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Scrap from './pages/Scrap/Scrap';


function App() {

  return (  
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/join" element={<Join/>} />
          <Route path="/mypage" element={<Mypage/>} />
          <Route path="/scrap" element={<Scrap/>} />
        </Routes>
      </Router>
      <Bottom/>
    </div>
  );
}

export default App;