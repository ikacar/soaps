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
import ReactFullpage from '@fullpage/react-fullpage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// class App extends Component {
//   handleScroll = e => {
//   console.log("ss")
//   }
//   render(){
//     return (
//       <ReactFullpage className="App" onScroll={this.handleScroll}
//       licenseKey = {'YOUR_KEY_HERE'}
//       scrollingSpeed = {1000} /* Options here */>
//         {/* <Header/>  */}
//         <Home/>
//         <Products/>
//         <Store/>
//         <About/>
//         <Gallery/>
//         <Contact/>
//       </ReactFullpage>
//     );
//   }
  
// }
const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section">
          <Home/>
          </section>
          <section className="section">
          <Products/>
          </section>
          <section className="section">
          <Products/>
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
