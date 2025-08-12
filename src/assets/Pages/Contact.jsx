import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-950 px-4 py-10">
      <div className="bg-black/80 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-6 text-center">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-emerald-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-emerald-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded bg-emerald-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
          />
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-2 rounded transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center text-gray-400 text-xs">
          Or email me directly at <a href="mailto:your@email.com" className="text-emerald-300 underline">kyawthura1718@email.com</a>
        </div>
      </div>
      
    </div>
  )
}

export default Contact