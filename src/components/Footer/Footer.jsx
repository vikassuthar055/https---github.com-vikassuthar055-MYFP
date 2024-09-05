import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>vikas</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>delivery</li>
                <li>Privacy policy</li>
            </ul>
         </div>
          <div className="footer-content-right">
            <ul>
                <li>9588055756</li>
                <li>vikassuthar3291@gmail.com</li>
            </ul>
          </div>

        </div>
        <hr />
    <p className="footer-copyright">copyright 2024</p>
      
    </div>
  )
}

export default Footer
