import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = ()=>{
    if (window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    } 
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? 'nav-container nav-container-bg' : 'nav-container'  }>
        <Link to='/'>
          <img src={logo} alt="logo" className='logo' /></Link>
        <ul className={click ? 'navbar active' : 'navbar'}>
          <li><Link to='/' className='nav-link' onClick={()=>setClick(false)}>Home</Link></li>
          <li><Link to='/projects' className='nav-link' onClick={()=>setClick(false)}>Projects</Link></li>
          <li><Link to='/about' className='nav-link' onClick={()=>setClick(false)}>About</Link></li>
          <li><Link to='/contact' className='nav-link' onClick={()=>setClick(false)}>Contact</Link></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes className='fa-icon' />) : (<FaBars className='fa-icon' />)}
        </div>
      </div>
    </>
  )
}

export default Nav
