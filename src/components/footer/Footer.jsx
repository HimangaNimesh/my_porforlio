import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>HIMANGA</a>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://facebook.com"><FiInstagram/></a>
        <a href="https://facebook.com"><BsLinkedin/></a>
      </div>
      <div className="footer__coyright">
        <small>@Himanga Nimesh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer