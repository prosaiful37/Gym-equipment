
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
import ManageInventory from './Components/MangeInventory/ManageInventory';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";
import AddInventory from './Components/MangeInventory/AddInventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
              <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addInventory' element={
        <RequireAuth>
            <AddInventory></AddInventory>
        </RequireAuth>
      }></Route>

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
      <ToastContainer />
    </div>
  );
}

export default App;
