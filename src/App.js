// import logo from './logo.svg';
import './App.css';
import Navber from './Component/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route></Route>
        <Route></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
