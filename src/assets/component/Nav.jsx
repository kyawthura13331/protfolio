import React, { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-emerald-950  z-100">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-emerald-400">My Portfolio</div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        <ul className="hidden md:flex gap-8">
          <li><a href="#" className="hover:text-emerald-400 text-white">Home</a></li>
          <li><a href="#about" className="hover:text-emerald-400 text-white">About</a></li>
          <li><a href="#projects" className="hover:text-emerald-400 text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 text-white">Contact</a></li>
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col md:hidden bg-black/20 px-6 pb-4 gap-4">
          <li><a href="#" className="hover:text-emerald-400 text-white">Home</a></li>
          <li><a href="#about" className="hover:text-emerald-400 text-white">About</a></li>
          <li><a href="#projects" className="hover:text-emerald-400 text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 text-white">Contact</a></li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar