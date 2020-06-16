import React from 'react';
import '../App.css';

function Header() {
  return (  
    <div className="header">
        <div className="h-logo">
            Logo
        </div>
        <div className="h-home">
            Home
        </div>
        <div className="h-store">
            Store
        </div> 
        <div className="h-about">
            About
        </div> 
        <div className="h-gallery"> 
            Gallery
        </div>
        <div className="h-contact">
            Contact
        </div>
        <div className="h-instagram">
            Instagram
        </div>
        <div className="h-facebook">
            Facebook
        </div>
        <div className="h-email"> 
            Email
        </div>
    </div>
  );
}

export default Header;
