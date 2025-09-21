import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);