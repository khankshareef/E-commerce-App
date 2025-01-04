import React from 'react';
import { Link } from 'react-router-dom';
import Produce from './Produce';
import './Produce1.css';

function Produce1() {
  return (
    <>
      <div className="Produce1">
        {/* First Product */}
        <div className="products">
          <div className="image-wrapper">
            <Link to='/handbag'>
            <img style={{width:'700px',height:'380px'}}
              src="https://img.freepik.com/premium-photo/gold-necklace-with-decration-plate-display_764413-69.jpg?uid=R179557919&ga=GA1.1.162865647.1732266041&semt=ais_hybrid"
              alt="Product 1"
            />
            <a href="/shop" className="shop-now-btn">
              Shop Now ➡ 
            </a>
            </Link>
            <h3 style={{position:'absolute',top:'30%',left:'36%',color:'white',fontWeight:'bolder'}}>Jewelery Collection</h3>
          </div>
        </div>

        {/* Second Product */}
        <div className="products1">
          <Link to="/shirt">
            <div className="image-wrapper">
              
              <img style={{width:'300px',height:'380px'}}
                src="https://m.media-amazon.com/images/I/714eIPqFXLL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Product 2"
              />
              <a href="/shop" className="shop-now-btn">
                Shop Now ➡ 
              </a>
              <h3 style={{position:'absolute',top:'20%',left:'22%',fontWeight:'bolder',color:'white'}}>Printed men's Shirts</h3>
            </div>
          </Link>
          
        </div>
      </div>

      {/* Additional Content */}
      <div className="produse2">
        <Produce />
      </div>
    </>
  );
}

export default Produce1;