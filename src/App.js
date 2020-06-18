import React, { useEffect, Component } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function handleOnScroll(){
  console.log("ju")
  window.scrollTo({top:0})
}

class App extends Component {
  constructor(props){
    super(props)
    this.statsRef=React.createRef()
  }
   handleScrollToStats () {
    window.scrollTo({
        top: this.statsRef.current.offsetTop,
        behavior: 'smooth'     
    })
  }
  render(){
    return (
      <div className="App" onScroll={this.handleScrollToStats}>
        {/* <Header/>  */}
        <Home/>
        <Store/>
        <About ref={this.statsRef}/>
        <Gallery/>
        <Contact/>
      </div>
    );
  }
  
}

export default App;
