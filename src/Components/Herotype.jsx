import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Firebase";
import { DataContext } from "../Products/Routers";
import "./Herotype.css";

function Herotype() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Control dropdown state
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user if logged in
      } else {
        setUser(null); // Clear user if logged out
      }
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  // Handle menu toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state
      setDropdownOpen(false); // Close dropdown
      toast.success("Logged out successfully", { position: "top-center" });
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Toggle dropdown menu for user options
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="hero-com">
      {/* Left Section */}
      <div className="left" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <h3 style={{ fontWeight: "bolder", color: "black", textDecoration: "none" }}>Shopper</h3>
      </div>

      {/* Middle Section */}
      <div style={{ padding: "20px" }} className={`middle ${menuOpen ? "open" : ""}`}>
        <span className="hover1">Home</span>
        <span className="hover2">Catalog</span>
        <span className="hover3">Shop</span>
        <span className="hover4">Pages</span>
        <span className="hover5">Blog</span>
        <span className="hover6">Docs</span>
      </div>

      {/* Right Section */}
      <div className="right">
        <SearchIcon className="hovers1" />
        <div>
          <Link to="/cart">
            <ShoppingCartTwoToneIcon className="hovers4" style={{ color: "black" }} />
            <span
              className="order"
              style={{
                position: "relative",
                top: "-13px",
                left: "-5px",
                color: "black",
                borderRadius: "50%",
                padding: "1.5px",
                width: "10px",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              {cart.length}
            </span>
          </Link>
        </div>

        {/* User Login/Dropdown */}
        <div className="signin-button">
          {user ? (
            <div className="user-dropdown" onClick={toggleDropdown}>
              <span className="user-name">{user.email}</span>
              {dropdownOpen && (
                <div className="dropdown">
                  <button className="dropdown-item" onClick={handleLogout}>
                    Signout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="buttons1">Signin</button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="mobile-menu">
        <MenuIcon onClick={handleMenuToggle} />
      </div>

      {/* Mobile Menu Icons */}
      {menuOpen && (
        <div className="mobile-icons">
          <SearchIcon className="hovers1" />
          <Link to="/cart">
            <ShoppingCartTwoToneIcon className="hovers4" style={{ color: "black" }} />
            <span
              className="order"
              style={{
                position: "relative",
                top: "-13px",
                left: "-5px",
                color: "black",
                borderRadius: "50%",
                padding: "1.5px",
                width: "10px",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              {cart.length}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Herotype;
