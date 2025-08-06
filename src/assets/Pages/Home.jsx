import React from 'react'
import Welcome from '../component/Welcome.jsx'
import NavBar from '../component/Nav.jsx'
import Footer from '../component/Footer.jsx'
const Home = () => {
  return (
    <>
      <div className='bg-[url("./assets/photo/BG.png")] bg-cover bg-center min-h-screen flex justify-center'>
        <NavBar/>
        <Welcome/>
      </div>
     
    </>
  )
}

export default Home