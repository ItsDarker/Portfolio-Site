import React from 'react'
import './footer.css'
import {FaFacebookSquare, FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='a' className='footer__logo'>FINO</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Expirence</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com'><FaFacebookSquare/></a>
        <a href='https://www.instagram.com/fino_franklin/'><AiFillInstagram/></a>
        <a href='https://twitter.com/FinofranklinJ'><FaTwitter/></a>
      </div>
      
      <div className='footer__copyright'>
        <small>&copy; FINO . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer