import Bottom from './components/Bottom';
import Home from './pages/Home/Home';

//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (  
    <div className="App">
      <Home></Home>
      <Bottom/>
    </div>
  );
}

export default App;