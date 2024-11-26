import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false); // Tracks whether the "More" menu is visible

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggles visibility of the right navigation
  };

  return (
    <div className='navbar-container'>
      {/* Left Navigation */}
      <div className='leftnav'>
        <LocalShippingOutlinedIcon className='truck' />
        <span>FREE SHIPPING WORLDWIDE</span>
        <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}} className='us-logo'>
          <img
            src='https://img.freepik.com/premium-vector/american-flag-usa-flag_408735-459.jpg?ga=GA1.1.162865647.1732266041&semt=ais_hybrid'
            alt='Country Flag'
          />
          <h6 style={{marginLeft:'10px',marginTop:'8px'}}>United States<KeyboardArrowDownIcon/> </h6>
        <h6 style={{marginLeft:'10px',marginTop:'8px'}}>USD<KeyboardArrowDownIcon/></h6>
        <h6 style={{marginLeft:'10px',marginTop:'8px'}}>English<KeyboardArrowDownIcon/></h6>
        </div>
      </div>

      {/* Right Navigation */}
      <div className={`rightnav ${isActive ? 'active' : ''}`}>
        <div className='social-icons'>
          <h6 style={{marginLeft:'10px',marginTop:'8px'}}>Shipping</h6>
          <h6 style={{marginLeft:'10px',marginTop:'8px'}}>FAQ</h6>
          <h6 style={{marginLeft:'10px',marginTop:'8px'}}>Contact</h6>
          <FacebookIcon style={{marginLeft:'10px',marginTop:'5px'}} />
          <TwitterIcon style={{marginLeft:'10px',marginTop:'5px'}}/>
          <InstagramIcon style={{marginLeft:'10px',marginTop:'5px'}}/>
        </div>
      </div>

      {/* More Button for Small Screens */}
      <div className='more-btn' onClick={toggleMenu}>
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default Navbar;