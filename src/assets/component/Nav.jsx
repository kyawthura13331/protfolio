import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

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
          <li><Link to="/" className="hover:text-emerald-400 text-white">Home</Link></li>
          <li><Link to="/about" className="hover:text-emerald-400 text-white">About</Link></li>
          <li><Link to="/projects" className="hover:text-emerald-400 text-white">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-emerald-400 text-white">Contact</Link></li>
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col md:hidden bg-black/20 px-6 pb-4 gap-4">
          <li><Link to="/" className="hover:text-emerald-400 text-white">Home</Link></li>
          <li><Link to="/about" className="hover:text-emerald-400 text-white">About</Link></li>
          <li><Link to="/projects" className="hover:text-emerald-400 text-white">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-emerald-400 text-white">Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar