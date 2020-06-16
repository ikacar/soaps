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
        <div className="home-img-1">
            slika1
        </div>
        <div className="home-header">
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
        <div className="home-img-2">
            Slika2
        </div>
    </div>
  );
}

export default Home;
