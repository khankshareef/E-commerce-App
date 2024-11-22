import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-con'>
        <div className='contents'>
            <h3>Want style Ideas and Treats?</h3>
        </div>
        <div className='search-con'>
            <input type='text' placeholder='Enter Email *'/>
            <button>Subscribe</button>
        </div>
        <div className='shopper-container'>
            <div className='shopper'>
                <h5 style={{fontWeight:'bolder',color:'white'}}>Shopper</h5>
                <div  className='logose'>
                <FacebookIcon style={{width:20,marginRight:'10px'}}/>
                <TwitterIcon style={{width:20,marginRight:'10px'}}/>
                <InstagramIcon style={{width:20,marginRight:'10px'}}/>
                <svg style={{width:'19px'}} class="svg-inline--fa fa-medium" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="medium" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M180.5 74.26C80.81 74.26 0 155.6 0 256S80.82 437.7 180.5 437.7 361 356.4 361 256 280.2 74.26 180.5 74.26zm288.3 10.65c-49.85 0-90.25 76.62-90.25 171.1s40.41 171.1 90.25 171.1 90.25-76.62 90.25-171.1H559C559 161.5 518.6 84.91 468.8 84.91zm139.5 17.82c-17.53 0-31.74 68.63-31.74 153.3s14.2 153.3 31.74 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"></path></svg>
            </div>
            </div>
            <div className='support'>
                <h6 style={{fontWeight:'bolder',color:'white'}}> Contact Us</h6>
                <h6>FAQs</h6>
                <h6>Size Guide</h6>
                <h6>Shipping & </h6>
                <h6>Returns</h6>
            </div>
            <div className='shop'>
                <h6 style={{fontWeight:'bolder',color:'white'}}>Men's </h6>
                <h6>Shopping</h6>
                <h6>Women's </h6>
                <h6>Shopping</h6>
                <h6>Kids' </h6>
                <h6>Shopping</h6>
                <h6>Discounts</h6>
            </div>
            <div className='company'>
                <h6 style={{fontWeight:'bolder',color:'white'}}>Our Story</h6>
                <h6>Careers</h6>
                <h6>Terms & </h6>
                <h6>Conditions</h6>
                <h6>Privacy & </h6>
                <h6>Cookie policy</h6>
            </div>
            <div className='contact'>
                <h6 style={{fontWeight:'bolder',color:'white'}}>1-202-555-0105</h6>
                <h6>1-202-555-0106</h6>
                <h6>help@shopper.com</h6>
            </div>
        </div>
    </div>
  )
}

export default Footer