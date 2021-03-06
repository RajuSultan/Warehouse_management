// import logo from './logo.svg';
import './App.css';
import Navber from './Component/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Resister from './Component/Login/Resister/Resister';
import Login from './Component/Login/Login/Login';
import Singleitem from './Component/Products/Singleitem/Singleitem';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import ManageIn from './Component/Products/ManageIn/ManageIn';
import Blogs from './Component/Blogs/Blogs';
import Myitems from './Component/Products/Myitems/Myitems';
import NotFound from './Component/Share/Notfound/NotFound';
// import useProduct from '../src/Component/Share/Hooks/useProduct';


function App() {



  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/resister' element={<Resister></Resister>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/singleitem/:id' element={
          <RequireAuth>
            <Singleitem ></Singleitem>
          </RequireAuth>
        }></Route>
        <Route path='/managein' element={
          <RequireAuth>
            <ManageIn></ManageIn>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <Myitems></Myitems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
