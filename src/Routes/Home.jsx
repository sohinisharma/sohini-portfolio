import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="mask">
        <p>HI, I 'M SOHINI SHARMA</p>
        <h1>WEB DEVELOPER</h1>
        <div className='link-btn'>
        <Link to='/projects' className='btn'>Projects</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link></div>
        </div>
      </div>            
    </>
  )
}

export default Home
