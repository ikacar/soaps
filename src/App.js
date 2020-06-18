import React, { useEffect, Component } from 'react';
import './App.css';
// import './components/Products/Images/Products.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Store from './components/Store/Store'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Products from './components/Products/Products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Header/>  */}
        <Home/>
        <Products/>
        <Store/>
        <About/>
        <Gallery/>
        <Contact/>
      </div>
    );
  }
  
}

export default App;
