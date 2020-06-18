import React, { useEffect } from 'react';
import '../App.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]) 
  return (  
<section className="about">
        <div className="about-img-1">
          slika1
        </div>
        <div className="about-us" >
          <div className="about-us-logo">
                logo
          </div>  
          <div className="about-us-header">
                header
          </div>
          <div className="about-us-text">
                text
          </div>
        </div>
        <div className="about-img-2">
            slika2
        </div>
    </section>
  );
}

export default About;