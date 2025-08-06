import React from 'react'
import Login from '../photo/Login_pj.png'
import work from '../photo/pj_work.png'
import singer from '../photo/singer_pj.png'
import todo from '../photo/todolist_pj.png'

const PjList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
      <a
        href="https://login-psi-black.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform duration-300"
      >
        <img src={Login} className="w-full h-40 object-cover rounded-lg" alt="Login Project" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform duration-300"
      >
        <img src={singer} className="w-full h-40 object-cover rounded-lg" alt="Singer Project" />
      </a>
      <a
        href="https://todo-list-rouge-chi-26.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform duration-300"
      >
        <img src={todo} className="w-full h-40 object-cover rounded-lg" alt="Todo Project" />
      </a>
      <a
        href="https://jobpj.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform duration-300"
      >
        <img src={work} className="w-full h-40 object-cover rounded-lg" alt="Work Project" />
      </a>
    </div>
  )
}

export default PjList