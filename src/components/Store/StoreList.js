import React, { useEffect } from 'react';
import '../../App.css';

function StoreList(props) {
    return (
    
    <div className="store-list">
        {
            props.data.items.map((items, key)=>{
                       
                return   <div className="store-item">
                    <div className="store-name">{items.name}</div>
                    <div className="store-substances">test</div>
                    <div className="store-price">{items.price}</div>
                    <div className="store-price10">{items.price10}</div>
                </div>
            })

        }
    </div>
  );
}

export default StoreList;
