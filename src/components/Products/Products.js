import React, { useEffect } from 'react';
import '../../App.css';
import './Products.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import sapun from './Images/sapun.PNG'
// import bomba from './Images/bomba.PNG'
// import sapun1 from './Images/sapun2.PNG'

function Products() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]) 
  return (  
    <section className="products">
          <div className="soap-product" >
            <div className="soap-product-1">
              <h1 className="wh-color">Soaps</h1>
              <h3 className="wh-color">Lorem ipsum dolordunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</h3>
            </div>
            <div className="soap-product-2">
            {/* <img src={sapun} className="img1"/> */}

            </div>

          </div>
          <div className="bath-product">
            <div className="bath-product-1">
            <h3 className="wh-color">Bombs</h3>
              <h3 className="wh-color">Lorem ipsum dolor sit ametnt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className="bath-product-2"/>
            <div className="bath-product-img"/>
          </div>
          <div className="lip-product">
            <div className="lip-product-1">
              <h3 className="wh-color">Lipbalm</h3>
              <h3 className="wh-color">Lorem ipsum dolor sit amettation ullamco labaute irure dolor in rem id est laborum.</h3>
            </div>
            <div className="lip-product-2"/>
            <div className="lip-product-img"/>
          </div>
        </section>
  );
}
export default Products;
