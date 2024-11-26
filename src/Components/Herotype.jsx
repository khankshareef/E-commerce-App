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
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const { cart } = useContext(DataContext); // Use the DataContext with useContext

  // Handle menu toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero-com">
      {/* Left Section (Logo) */}
      <div className="left">
        <Link to='/'>
        <h3  style={{ fontWeight: 'bolder'}}>Shopper</h3>
        </Link>
      </div>

      {/* Middle Section (Navigation Links) */}
      <div className={`middle ${menuOpen ? 'open' : ''}`}>
        <span className="hover1">
          <h6 className="hover1">Home</h6>
          <div className="dropdown">
            <span>Default</span>
            <span>Classic</span>
            <span>Fashion</span>
            <span>Boxed</span>
            <span>Simple</span>
            <span>Asymmetric</span>
            <span>Sidenav</span>
            <span>Landing</span>
          </div>
        </span>
        <span>
          <h6 className="hover2">Catalog</h6>
        </span>
        <span>
          <h6 className="hover3">Shop</h6>
        </span>
        <span className="hover4">
          <h6>Pages</h6>
          <div className="pages-dropdown">
            <span>About</span>
            <span>Contact Us</span>
            <span>Store Locator</span>
            <span>FAQ</span>
            <span>Coming Soon</span>
            <span>404</span>
          </div>
        </span>
        <span className="hover5">
          <h6>Blog</h6>
          <div className="blog-dropdown">
            <span>Blog</span>
            <span>Blog Post</span>
          </div>
        </span>
        <span>
          <h6 className="hover6">Docs</h6>
        </span>
      </div>

      {/* Right Section (Icons) */}
      <div className="right">
        <SearchIcon className="hovers1" />
        <PermIdentityIcon className="hovers2" />
        <FavoriteBorderTwoToneIcon className="hovers3" />
        <div>
          <Link to="/cart">
            <ShoppingCartTwoToneIcon className="hovers4" />
            <span
              className="order"
              style={{
                position: 'relative',
                top: '-14px',
                left: '-5px',
                borderRadius: '50%',
                padding: '0px',
              }}
            >
              {cart.length} {/* Show the number of items in the cart */}
            </span>
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