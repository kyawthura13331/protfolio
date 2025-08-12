import React from 'react'

import Home from './assets/Pages/Home.jsx'
import Contact from './assets/Pages/Contact.jsx'
import MyProjects from './assets/Pages/MyProjects.jsx'
import Nav from './assets/component/Nav.jsx'
import About from './assets/Pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<MyProjects/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App