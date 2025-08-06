import React from 'react'

const Footer = () => {
  return (
    
        <div className="flex gap-5  text-2xl mt-30">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://www.youtube.com/@tyyharu9917" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.16 3.5 12 3.5 12 3.5s-7.16 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.418 0 12 0 12s0 3.582.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.84 20.5 12 20.5 12 20.5s7.16 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.582 24 12 24 12s0-3.582-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black scale-120">
            <svg fill="currentColor" viewBox="0 0 48 48" className="w-7 h-7">
              <path d="M41.5 15.5c-3.6 0-6.5-2.9-6.5-6.5h-5v24.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.7 0 1.4.2 2 .5v-5.2c-.7-.1-1.3-.1-2-.1-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5V21.7c1.9 1.1 4.1 1.8 6.5 1.8v-5z"/>
            </svg>
          </a>
          <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M9.964 15.568l-.396 4.026c.57 0 .818-.244 1.116-.537l2.676-2.553 5.547 4.045c1.016.561 1.74.266 1.993-.941l3.617-16.98c.33-1.527-.553-2.124-1.54-1.753L2.13 9.47c-1.49.579-1.473 1.406-.254 1.78l4.34 1.355 10.08-6.36c.474-.308.908-.137.552.171"/></svg>
          </a>
           <div className="text-xs sm:text-sm text-gray-400 text-center w-full mt-2">
  &copy; {new Date().getFullYear()} Kyaw Thura. All rights reserved.
</div>
        </div>
       
      
  )
}

export default Footer