import React from 'react'
import './Projects.css'
import Projectdata from '../components/Projectdata'



const Projects = () => {
  return (
    <>    
    <div className='project-container'>
      <div className="heading">
        <h1>PROJECTS</h1>
        <p>My all projects are here</p>
      </div>
    </div>
   <Projectdata/>
    </>

  )
}

export default Projects
