import React, { useState } from 'react'
import Avatar from '../assets/avataaars.svg'
import Wink from '../assets/wink.svg'
import Button from './Button'
import { Link } from 'react-router-dom'

const Home = () => {
    const [imghover, setImghover] = useState(false)
    return (
        <>
            <div className='flex flex-col justify-center items-center  min-h-screen  text-white'>
                <section className='flex flex-col justify-center items-center'>
                    {imghover ? <img src={Wink} alt="avatar" className='w-48 h-48 rounded-full border-4 border-[rgb(40,144,241)]' onMouseOut={() => setImghover(false)} /> : <img src={Avatar} alt="avatar" className='w-48 h-48 rounded-full border-4 border-[rgb(40,144,241)] hover:scale-110 transition-transform duration-300' onMouseOver={() => setImghover(true)} />}
                    <h1 className='text-5xl font-bold mb-4'>Hello, I'm Sandeep</h1>
                    <div className="actions flex gap-4  mt-4">
                        <Button><Link to="/resume">Resume</Link></Button>
                        <Button><Link to="/about">About Me</Link></Button>
                    </div>
                </section>
                <aside className='mt-8 w-[5%] text-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 fixed left-0 p-4 rounded-md text-gray-800 font-medisum'>
                    <div className="socials">
                        <div className="github mb-4">
                            <a href="https://github.com/sandy0223" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github text-4xl hover:text-white"></i></a>
                        </div>

                        <div className="linkedin mb-4">
                            <a href="https://www.linkedin.com/in/sandeepbehera16/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-linkedin text-4xl hover:text-white"></i></a>
                        </div>
                        <div className="twitter">
                            <a href="https://twitter.com/SandeepBehera02" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-x-twitter text-4xl hover:text-white"></i></a>
                        </div>

                    </div>
                </aside>
            </div>

        </>
    )
}

export default Home
