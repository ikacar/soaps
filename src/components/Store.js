import React , { useEffect }from 'react';
import '../App.css';
import StoreList from './StoreList'
import LipBalmList from '../components/LipBalmList'
import BathBombList from '../components/BathBombList'
import Aos from 'aos'
import 'aos/dist/aos.css'
import soapsJson from '../data/soaps.json'
import bombsJson from '../data/bombs.json'
import lipsJson from '../data/lips.json'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Store() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]) 
  return (  
    <section className="store">
        <div className="store-header" data-aos="fade-up"
            data-aos-duration="500">
            store header  
        </div>
        <Router>
        <div className="store-category" data-aos="fade-down"
            data-aos-duration="2000">
          <Link to="/store-soaps" style={{ textDecoration: 'none' }}>
          <div className="store-soaps">
                SOAPS
          </div>
          </Link>
          
          <Link to="/store-bathbombs" style={{ textDecoration: 'none' }}>
          <div className="store-bathbombs">
                BATHBOMBS
          </div>
          </Link>

          <Link to="/store-lipbalm" style={{ textDecoration: 'none' }}>
          <div className="store-lipbalm">
                LIPBALM
          </div>
          </Link>
        </div>
        <div className="store-products-list"  data-aos="zoom-out-left"
            data-aos-duration="2000">
            <div className='store-products-list-header'>
              <div className="store-product-list-name">
                NAME
              </div>
              <div className="store-product-list-substances">
                SUPSTANCE
              </div>
              <div className="store-product-list-price">
                PRICE
              </div>
              <div className="store-product-list-price10">
                PRICE x 10
              </div>
            </div>
            
            <Switch>
              <Route path="/store-soaps">
                <StoreList data={soapsJson} className="store-content"/>
              </Route>
              <Route path="/store-lipbalm">
                <StoreList data={lipsJson} className="store-content"/>
              </Route>
              <Route path="/store-bathbombs">
                <StoreList data={bombsJson} className="store-content"/>
              </Route>
            </Switch>
            
        </div>
        </Router>
    </section>

  );
}

export default Store;