import React from 'react'
import PjList from './PjList'
import myphoto from '../photo/myphoto1.jpg'
import Footer from './Footer'
const Welcome = () => {
  return (
    <div >
        <img src={myphoto} className=' ml-1 lg:ml-43 absolute left-fit top-20 w-40 h-40 z-0 rounded-full ' alt="" />
      <div className='  mt-18 text-center '>
        <h1 className='text-2xl ml-30 md:text-[70px]  font-bold text-emerald-400  '>
          Welcome To My Portfolio
        </h1>
          <p className='ml-40 text-[23px] text-white font-mono mt-5'>
            MY NAME IS <span className='text-2xl  font-mono text-emerald-400'>KYAW THURA</span>
          </p>
          </div>
          <div className='grid grid-cols-2 gap-8   mt-20 p-5'>
             <p className='text-xl text-white font-mono mt-5'>
              I’M A PASSIONATE FRONT-END WEB DEVELOPER SKILLED IN REACT.JS, HTML, CSS, JAVASCRIPT, AND TAILWIND CSS. I LOVE BUILDING RESPONSIVE, USER-FRIENDLY WEBSITES WITH CLEAN CODE AND SMOOTH UI/UX.

I’M CURRENTLY LOOKING FOR JOB OPPORTUNITIES WHERE I CAN GROW AND CONTRIBUTE AS A DEVELOPER.
LET’S CONNECT!
<Footer/>
 
             </p>
            
            <PjList/>
          </div>
          
      
     
    </div>
  )
}

export default Welcome