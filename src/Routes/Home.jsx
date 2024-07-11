import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Resume from '../assets/Sohini CV.pdf'
import { FaDownload } from 'react-icons/fa'


const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="mask">
        <p>HI, I 'M SOHINI SHARMA</p>
        <h1>WEB DEVELOPER</h1>
        <div className='link-btn'>
        <Link to='/projects' className='btn'>Projects</Link>
        <a href={Resume} download="Sohini CV.pdf"><button className='btn btn-light'>
        <FaDownload /> Resume        
        </button></a></div>
        </div>
      </div>     
    </>
  )
}

export default Home
