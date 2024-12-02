import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Products/Routers'; // Import your context
import './Herotype.css';

function Herotype() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(DataContext);

  // Handle menu toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero-com">
      {/* Left Section */}
      <div className="left">
        <Link to="/">
          <h3 style={{ fontWeight: "bolder",color:'black',textDecoration:'none' }}>Shopper</h3>
        </Link>
      </div>

      {/* Middle Section (Desktop & Mobile Menu) */}
      <div style={{padding:'20px'}} className={`middle ${menuOpen ? "open" : ""}`}>
        <span className='hover1'>Home</span>
        <span className='hover2'>Catalog</span>
        <span className='hover3'>Shop</span>
        <span className='hover4'>Pages</span>
        <span className='hover5'>Blog</span>
        <span className='hover6'>Docs</span>
      </div>

      {/* Right Section */}
      <div className="right">
        <SearchIcon className="hovers1" />
        <PermIdentityIcon className="hovers2" />
        <FavoriteBorderTwoToneIcon className="hovers3" />
        <div>
          <Link to="/cart">
            <ShoppingCartTwoToneIcon className="hovers4" style={{color:'black'}} />
            <span className="order" style={{position:'relative',top:'-13px',left:'-5px',color:'black',borderRadius:'50%',padding:'1.5px',width:'10px',fontSize:'15px'}}>{cart.length}</span>
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="mobile-menu">
        <MenuIcon onClick={handleMenuToggle} />
      </div>
    </div>
  );
}

export default Herotype;