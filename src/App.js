import Bottom from './components/Bottom';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './store';
//pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (  
    <Provider store={store}>
      <Home></Home>
      <Bottom/>
    </Provider>
  );
}

export default App;