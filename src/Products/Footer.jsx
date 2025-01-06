import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Fetch the stored email from localStorage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  // Check if the logged-in user is the admin
  const isAdmin = userEmail === 'khankshareef@gmail.com';

  return (
    <div className='footer-con'>
      <div className='contents'>
        <h3>Want style Ideas and Treats?</h3>
      </div>
      <div className='search-con'>
        <input type='text' placeholder='Enter Email *' />
        <button>Subscribe</button>
      </div>
      <div className='shopper-container'>
        <div className='shopper'>
          <h5 style={{ fontWeight: 'bolder', color: 'white' }}>Shopper</h5>
          <div className='logose'>
            <FacebookIcon style={{ width: 20, marginRight: '10px' }} />
            <TwitterIcon style={{ width: 20, marginRight: '10px' }} />
            <InstagramIcon style={{ width: 20, marginRight: '10px' }} />
          </div>
        </div>
        <div className='support'>
          <h6 style={{ fontWeight: 'bolder', color: 'white' }}>Contact Us</h6>
          <h6>FAQs</h6>
          <h6>Size Guide</h6>
          <h6>Shipping & </h6>
          <h6>Returns</h6>
        </div>
        <div className='shop'>
          <h6 style={{ fontWeight: 'bolder', color: 'white' }}>Men's </h6>
          <h6>Shopping</h6>
          <h6>Women's </h6>
          <h6>Shopping</h6>
          <h6>Kids' </h6>
          <h6>Shopping</h6>
          <h6>Discounts</h6>
        </div>
        <div className='company'>
          <h6 style={{ fontWeight: 'bolder', color: 'white' }}>Our Story</h6>
          <h6>Careers</h6>
          <h6>Terms & </h6>
          <h6>Conditions</h6>
          <h6>Privacy & </h6>
          <h6>Cookie policy</h6>
        </div>
        <div className='contact'>
          <h6 style={{ fontWeight: 'bolder', color: 'white' }}>9390752137</h6>
          <h6>8050819475</h6>
          <h6>khankshareef@gmail.com</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
