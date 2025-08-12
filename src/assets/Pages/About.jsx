import React from 'react'
import { Link } from 'react-router-dom'
import myPhoto from '../photo/myphoto1.jpg' 
import Footer from '../component/Footer.jsx'
const About = () => {
  return (
<div>
    <section className=" py-8 px-4 min-h-[60vh] flex items-center justify-center transition-all duration-700 bg-green-950 h-screen">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto bg-emerald-400 rounded-3xl shadow-lg p-8 relative">
        <div className="animate-fade-in ">
          <img
            src={myPhoto}
            alt="My portrait"
            className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
        <div className="flex-1 min-w-[250px] animate-slide-in ">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-indigo-900 mb-4 tracking-wide flex items-center">
            About Me
            <Link
              to="/projects"
              className="ml-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-700 via-emerald-600 to-green-400 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:from-green-400 hover:to-emerald-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <span className="mr-2">My Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </h2>
          <p className="font-inter text-base md:text-lg text-slate-700 leading-relaxed">
            Hi! I’m <span className="font-semibold text-indigo-500 font-montserrat">Kyaw Thura</span>, a passionate web developer with a love for creating beautiful and functional user experiences. I specialize in React, responsive design, and modern web technologies. Let’s build something amazing together!
          </p>
        </div>
      </div>
     
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-slide-in {
            animation: slideIn 1.2s cubic-bezier(.4,0,.2,1) 0.3s both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
       
    </section>
    
   
</div>
    
  )
}

export default About