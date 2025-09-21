import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avataaars.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
}, [darkMode]);


  return (
    <nav className="w-full sm:w-[40%] mx-auto mt-5 flex justify-between items-center px-4 py-2 text-white font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 relative">
      {/* Logo */}
      <div className='flex items-center border-r-4 border-amber-400 pr-4'>
        <Link to='/' className='w-10 h-10'>
          <img className='w-full h-full' src={Avatar} alt="logo" />
        </Link>
      </div>

      {/* Hamburger button for mobile */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <label class="relative inline-flex cursor-pointer items-center">
        <input class="peer sr-only" type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
        <div
          class="border-gray-500 shadow-lg peer-checked:shadow-green-600 shadow-blue-600 border flex h-6 w-12 items-center outline-none rounded bg-sky-600 pl-7 text-white transition-all duration-300 peer-checked:bg-green-600 peer-checked:pl-2 peer-focus:outline-none"
        ></div>
        <svg
          class="peer-checked:opacity-0 transition-all duration-500 opacity-100 absolute left-6 stroke-gray-900 w-5 h-5"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <path
            class="svg-fill-primary"
            d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z"
          ></path>
        </svg>
        <svg
          class="absolute transition-all duration-500 peer-checked:opacity-100 opacity-0 left-1 stroke-gray-900 w-5 h-5"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <path
            d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <div
          class="absolute left-1 top-1 flex h-3.5 w-4 items-center justify-center rounded-sm bg-white shadow-lg transition-all duration-300 peer-checked:left-7"
        ></div>
      </label>


      {/* Menu */}
      <div className={`sm:flex absolute sm:static top-14 left-0 w-full sm:w-auto bg-gray-700 sm:bg-transparent flex-col sm:flex-row gap-2 p-4 sm:p-0 rounded-md transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
        <Link to="/" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Home</Link>
        <Link to="/resume" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Resume</Link>
        <Link to="/projects" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Projects</Link>
        <Link to="/contact" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar