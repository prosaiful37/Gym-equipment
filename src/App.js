
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blogs/Blog';
import Login from './Components/Login/Login';
import NotFound from './Components/Notfound/NotFound';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
