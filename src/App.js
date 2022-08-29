
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blogs/Blog';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Registration/Signup';
import NotFound from './Components/Notfound/NotFound';
import Inventory from './Components/Inventory/Inventory';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
            </RequireAuth>
        }></Route>
        
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
