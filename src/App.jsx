import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-gradient-to-r w-screen flex flex-col from-gray-900 via-gray-800 to-gray-900  h-screen'>
        <Home/>
    </div>
  )
}

export default App
