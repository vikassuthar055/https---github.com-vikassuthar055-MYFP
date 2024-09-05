import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home  from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
  <>
     {showLogin===true?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
        <Router> 

        <Navbar setShowLogin={setShowLogin}/>

        <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path='/order' element={<PlaceOrder/>}> </Route> 
        </Routes>
        </Router>

      </div>
       <Footer/>
  </>
  )
}

export default App
