import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/avataaars.svg'

const Navbar = () => {
  return (
    <nav className="navbar w-[40%] absolute -translate-x-1/2 left-1/2 top-5  h-[4rem] flex justify-between items-center px-4 text-white bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className='border-r-4  border-amber-400 items-center flex  pr-4'>
            <Link to='/' className='w-[4rem] h-[3rem]'><img className='w-full h-full' src={Avatar} alt="" /></Link>
        </div>
        <div className="menu">
            <ul className='flex gap-2 '>
                <Link to="/" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Home</Link>
                <Link to="/resume" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Resume</Link>
                <Link to="/projects" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Projects</Link>
                <Link to="/contact" className='hover:underline transition-all p-2 rounded-md cursor-pointer underline-offset-8'>Contact</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
