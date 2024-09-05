import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("login")
  
  
  return (
    <div className='login-popup'>
      <form className='login-popup-container' >
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="logic-popup-inputs">
            {currState==="login"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="text" placeholder='Your Email' required />
            <input type="text" placeholder='Passward' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
       {currState==="login"?<p>Create a new account <span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("login")}>Login here</span></p>}
        
      </form>
      
    </div>
  )
}

export default LoginPopup
