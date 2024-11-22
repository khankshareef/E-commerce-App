import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import React from 'react';
import './Herotype.css';
function Herotype() {
  return (
    <div className='hero-com'>
      <div className='left'>
        <h3 style={{fontWeight:'bolder'}}>Shopper</h3>
      </div>
      <div className='middle'>
        <span><h6 className='hover1'>Home</h6></span>
        <span> <h6 className='hover2'>Catalog</h6></span>
        <span><h6 className='hover3'>Shop</h6></span>
        <span><h6 className='hover4'>Pages</h6></span>
        <span><h6 className='hover5'>Blog</h6></span>
        <span><h6 className='hover6'>Docs</h6></span>
      </div>
      <div className='right'>
        <SearchIcon className='hovers1'/>
        <PermIdentityIcon className='hovers2'/>
        <FavoriteBorderTwoToneIcon className='hovers3'/>
        <div>
        <ShoppingCartTwoToneIcon className='hovers4'/>
        <span className='order' style={{position:'relative',top:'-12px',left:'-5px',backgroundColor:'red',borderRadius:'50%',padding:'2px'}}>2</span>
        </div>
      </div>
    </div>
  )
}

export default Herotype