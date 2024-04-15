import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.jpg'
import { FaDownload } from 'react-icons/fa'
import Resume from '../assets/resume.pdf'

const About = () => {
  return (
    <>
     <div className='about-container'>
      <div className="heading">
        <h1>ABOUT</h1>
        <p>I am a friendly web developer.</p>
      </div>
    </div>
    <div className='about'>
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am Sohini sharma, I'm a web developer I create responsive websites. I'm passionate about Web development as well as like to play with coding. I will give 100% effort to my work. I'm workhard for my work, I work until i'm not satisfied.</p>
        
        <div className='btn-container'>
        <div>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>

        <div>
        <a href={Resume} download="resume.pdf"><button className='btn'>
        <FaDownload /> Resume        
        </button></a></div>
        </div>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="top-stack">
          <img src={react1} className='img' alt="top-img" />
          </div>        
        <div className="bottom-stack">
        <img src={react2} className='img' alt="bottom-img" />
        </div>
      </div>
    </div>
    </div>

    <div className='skill-container'>
  <h1>Skills</h1>
  <div className='skills'>
    <div>
      <h3>Programming Language</h3>
      <p>Javascript</p>
    </div>
    <div>
      <h3>API Testing</h3>
      <p>Postman, Thunder Client</p>
    </div>
    <div>
      <h3>Web Technologies</h3>
      <p>HTML, CSS, Bootstrap, React.js, Node.js, Express.js, Material UI</p>
    </div>
    <div>
      <h3>Database</h3>
      <p>MY SQL, MongoDB</p>
    </div>
  </div>
</div>

    </>
  )
}

export default About
