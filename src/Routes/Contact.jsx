import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>    <div className='contact-container'>
      <div className="heading">
        <h1>CONTACT</h1>
        <p>Let's Connect and Explore Opportunities Together!</p>
      </div>
    </div>
    <div className="form">
      <form action="">
        <label>Your Name</label>
        <input type="text" />
        <label>E-Mail</label>
        <input type="email" />        
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea cols="30" rows="6" placeholder='Type Your Message Here'></textarea>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
    </>

  )
}

export default Contact
