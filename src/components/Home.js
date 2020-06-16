import React from 'react';
import '../App.css';

function Home() {
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
