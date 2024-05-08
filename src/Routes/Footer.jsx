import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
      <div className="left">
        <div className="location">
        <p><FaHome className='fa-icon'/>
            Sector-91, Faridabad</p>
        </div>
        <div className="phone">
        <p>
        <FaPhone className='fa-icon'/>
        75504664**</p>
        </div>
        <div className="e-mail">
        <p>
        <FaMailBulk className='fa-icon'/>
        sharmasohini80@gmail.com</p>
        </div>
      </div>

      <div className="right">
        <h4>About me</h4>
        <p>I am Sohini sharma, I'm a web developer I create responsive websites. I'm passionate about Web development as well as like to play with coding. I will give 100% effort to my work. I'm workhard for my work, I work until i'm not satisfied.</p>
        <div className="social">
        <p>
        <FaFacebook className='fa-icon'/>
        <FaTwitter className='fa-icon'/>
        <a href="https://www.linkedin.com/in/sohini-sharma-2967ba271/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='fa-icon'/></a>
        <a href="https://github.com/sohinisharma" target="_blank" rel="noopener noreferrer"><FaGithub className='fa-icon'/></a>
        </p>
        </div>
      </div>
    </div>  
    </div>
  )
}

export default Footer
