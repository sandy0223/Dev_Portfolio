import React from 'react'
import Avatar from '../assets/avataaars.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full  ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Avatar} className="h-8" alt="Logo" />
                        <span className="self-center text-blue-400 text-2xl font-semibold whitespace-nowrap">Sandeep Behera</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                        <li>
                            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to="/resume" className="hover:underline me-4 md:me-6">Resume</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:underline">Projects</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-sky-700 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-400 sm:text-center">
                    © 2025 Sandeep Behera. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
