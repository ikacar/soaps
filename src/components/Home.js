import React, { useEffect } from 'react';
import '../App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]) 
  return (  
    <div className="home">
        
        <div className="home-img-1" data-aos="slide-left" data-aos-duration="1500">
            slika1
        </div>
        <div className="home-img-src-1" data-aos="fade-down" data-aos-delay="1000"/>

        <div className="home-header" data-aos="fade-down" data-aos-delay="1000">
            home header
        </div>
        <div className="home-info">
            <div className="home-info-location">
                Address
            </div>
            <div className="home-info-contact">
                Contact
            </div>
        </div>
        <div className="home-since">
            Since2017
        </div>
        <div className="home-img-2" data-aos="slide-right" data-aos-duration="1500">
            Slika2
        </div>
        <div className="home-img-src-2" data-aos="fade-up" data-aos-delay="1000"/>

        
    </div>
  );
}

export default Home;
