import React from 'react'
import Login from '../photo/Login_pj.png'
import work from '../photo/pj_work.png'
import singer from '../photo/singer_pj.png'
import todo from '../photo/todolist_pj.png'
import { Link } from 'react-router-dom'

const projects = [
  {
    name: "Login Project",
    img: Login,
    url: "https://login-psi-black.vercel.app/"
  },
  {
    name: "Singer Project",
    img: singer,
    url: "https://song-ivory.vercel.app/"
  },
  {
    name: "Todo Project",
    img: todo,
    url: "https://todo-list-rouge-chi-26.vercel.app/"
  },
  {
    name: "Work Project",
    img: work,
    url: "https://jobpj.vercel.app/"
  }
]

const MyProjects = () => {
  return (
    <div className="min-h-screen bg-emerald-950 flex flex-col items-center py-3 px-2">
      <h2 className="text-2xl md:text-4xl font-bold text-emerald-400 mt-20 mb-5 text-center">My Projects</h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-2">
          {projects.map((pj, idx) => (
            <Link
              key={idx}
              to={pj.url}
              target="_blank"
              rel="noopener noreferrer"
              className= "h-60 bg-black/80 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4 animate-fade-in-up"
              style={{
                animationDelay: `${idx * 0.25 + 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <img
                src={pj.img}
                alt={pj.name}
                className="w-full h-48 object-cover rounded-md mb-4 max-w-xs sm:max-w-none"
              />
              <div className="text-lg font-semibold text-white text-center">{pj.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) forwards;
          }
          @media (max-width: 640px) {
            .grid {
              grid-template-columns: 1fr !important;
            }
            .animate-fade-in-up {
              min-width: 0;
              width: 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  )
}

export default MyProjects