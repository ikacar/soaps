import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Store/>
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
