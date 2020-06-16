import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]) 
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Store/>
      <div className='test'data-aos="fade-up" />
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
