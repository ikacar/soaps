import React from 'react';
import '../App.css';

function Store() {
  return (  
    <div className="store">
        <div className="store-header">
            store header
        </div>
        <div className="store-category">
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
        <div className="store-products-list">
            lavander-250, pine-250, lemon-250
        </div>
    </div>

  );
}

export default Store;