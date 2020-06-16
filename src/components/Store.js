import React , { useEffect }from 'react';
import '../App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Store() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]) 
  return (  
    <div className="store">
        <div className="store-header" data-aos="fade-up"
            data-aos-duration="500">
            store header
        </div>
        <div className="store-category" data-aos="fade-down"
            data-aos-duration="2000">
          <div className="store-soaps">
                soaps
          </div>
          <div className="store-lipbalm">
                lipbalm
          </div>
          <div className="store-bathbombs">
                bathbombs
          </div>
        </div>
        <div className="store-products-list"  data-aos="zoom-out-left"
            // data-aos-anchor="#example-anchor"
            //  data-aos-offset="100"
            data-aos-duration="2000"
            >
            lavander-250, pine-250, lemon-250
        </div>
    </div>

  );
}

export default Store;