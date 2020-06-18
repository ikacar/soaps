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
import { TweenLite, TimelineMax,Power3, autoAlpha } from "gsap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactFullpage from '@fullpage/react-fullpage';
import { Power1 } from 'gsap/gsap-core';

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         {/* <Header/>  */}
//         <Home/>
//         <Products/>
//         <Store/>
//         <About/>
//         <Gallery/>
//         <Contact/>
//       </div>
//     );
//   }
// }
function onLeave(origin, destination, direction) {
  console.log("Leaving section " + origin.index);
  if(destination.index===1){
    const section = destination.item
    const soap = section.querySelector('.soap-product')
    const bath = section.querySelector('.bath-product')
    const lip = section.querySelector('.lip-product')

    // const t1 = new TweenLite();
    TweenLite.from(soap,0.8,{x:-1000,autoAlpha: 0, ease: Power1.easeOut, delay:0.5})
    TweenLite.from(bath,0.8,{x:1000,autoAlpha: 0, ease: Power1.easeOut, delay:0.8})
    TweenLite.from(lip,0.8,{x:-1000,autoAlpha: 0, ease: Power1.easeOut, delay:1})
  }
  else if(destination.index===2){
    console.log("DRUGI bato ");
  }
  else if(destination.index===3){
    console.log("TRECI bato ");
  }
  else if(destination.index===4){
    console.log("CEE bato ");
  }
}
const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {700} /* Options here */
    navigation={true}
    onLeave={onLeave}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home/>
          </div>
          <div className="section">
            <Products/> 
          </div>
          <div className="section">
            <Store/>
          </div>
          <div className="section">
            <About/>
          </div>
          <div className="section">
            <Gallery/>
          </div>
          <div className="section">
            <Contact/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default App;
