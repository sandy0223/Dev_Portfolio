import React from 'react'
import Avatar from '../assets/avataaars.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="bg-white shadow-sm dark:bg-gray-900 w-screen ">
                <div class="w-full  max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={Avatar} class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sandeep Behera</span>
                        </Link>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" class="hover:underline me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link to="/resume" class="hover:underline me-4 md:me-6">Resume</Link>
                            </li>
                            <li>
                                <Link to="/projects" class="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline"></a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}

export default Footer
