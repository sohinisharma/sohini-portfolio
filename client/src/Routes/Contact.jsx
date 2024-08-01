import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      alert(response.data);
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

  return (
    <>
      <div className='contact-container'>
        <div className="heading">
          <h1>CONTACT</h1>
          <p>Let's Connect and Explore Opportunities Together!</p>
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <label>E-Mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <label>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
          <label>Message</label>
          <textarea name="message" cols="30" rows="6" placeholder='Type Your Message Here' value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className='btn'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
