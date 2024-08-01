import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Projects from './Routes/Projects'
import Contact from './Routes/Contact'
import About from './Routes/About'
import Footer from './Routes/Footer'
import Nav from './components/Nav'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>        
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
