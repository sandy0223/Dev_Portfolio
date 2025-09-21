import React, { useState } from 'react'
import react from '../assets/react.svg'
import css from '../assets/CSS3.svg'
import Avatar from '../assets/avataaars.svg'
import html from '../assets/HTML5.svg'
import js from '../assets/Js.svg'
import node from '../assets/Node.js.svg'
// import mongo from '../assets/MongoDB.svg'
import vite from '../assets/Vite.js.svg'
import tailwind from '../assets/Tailwind CSS.svg'
import Wink from '../assets/wink.svg'
import Button from './Button'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Home = () => {
    const [imghover, setImghover] = useState(false)
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white '>
                <div class="relative  w-full flex items-center justify-center mb-4">
                    <div class="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 animate-spin-slow">
                        <button class="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                               <img src={css} alt="css" />
                            </span>
                        </button>

                        <button class="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <img src={html} alt="html" />
                            </span>
                        </button>

                        <button class="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <img src={react} alt="react" />
                            </span>
                        </button>

                        <button class="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <img src={tailwind} alt="tailwind" />
                            </span>
                        </button>

                        <button class="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <img src={js} alt="javascript" />
                            </span>
                        </button>

                        <button class="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                               <img src={node} alt="nodejs" />
                            </span>
                        </button>

                        <button class="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                            <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                                <img src={vite} alt="vite" />
                            </span>
                        </button>

                        <button class="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                            <div class="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                                <span>
                                    
                                        {imghover ? (
                                            <img
                                                src={Wink}
                                                alt="avatar"
                                                className='w-48 h-48 rounded-full '
                                                onMouseOut={() => setImghover(false)}
                                            />
                                        ) : (
                                            <img
                                                src={Avatar}
                                                alt="avatar"
                                                className='w-48 h-48 rounded-full hover:scale-110 transition-transform duration-300'
                                                onMouseOver={() => setImghover(true)}
                                            />
                                        )}

                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <h1 className='text-3xl font-bold mb-4 text-center p-4'>Hello, I'm Sandeep</h1>
                <div className="actions flex gap-4 mt-4">
                    <Button><Link to="/resume">Resume</Link></Button>
                    <Button><Link to="/about">About Me</Link></Button>
                </div>


                <section className='flex flex-col justify-center items-center'>
                    {/* {imghover ? (
                        <img
                            src={Wink}
                            alt="avatar"
                            className='w-48 h-48 rounded-full border-4 border-[rgb(40,144,241)]'
                            onMouseOut={() => setImghover(false)}
                        />
                    ) : (
                        <img
                            src={Avatar}
                            alt="avatar"
                            className='w-48 h-48 rounded-full border-4 border-[rgb(40,144,241)] hover:scale-110 transition-transform duration-300'
                            onMouseOver={() => setImghover(true)}
                        />
                    )} */}
                </section>

                <aside className='mt-8 w-14 text-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 fixed left-0 top-1/4 p-4 rounded-md text-gray-800 font-medium'>
                    <div className="socials flex flex-col items-center gap-4">
                        <a href="https://github.com/sandy0223" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-github text-4xl hover:text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sandeepbehera16/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-linkedin text-4xl hover:text-white"></i>
                        </a>
                        <a href="https://twitter.com/SandeepBehera02" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-x-twitter text-4xl hover:text-white"></i>
                        </a>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Home
