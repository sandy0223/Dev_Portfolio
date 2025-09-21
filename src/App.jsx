import React from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'
import SkillBar from './components/SkillBar'


const App = () => {
  return (
    <div className='bg-gradient-to-r w-screen flex flex-col from-gray-900 via-gray-800 to-gray-900  h-screen'>
        <Home/>
        <SkillBar/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
  )
}

export default App
