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
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setDropdownOpen(false);
      toast.success("Logged out successfully", { position: "top-center" });
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to log out", { position: "top-center" });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="hero-com">
      <div className="left" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <h3 style={{ fontWeight: "bolder", color: "black", textDecoration: "none" }}>Shopper</h3>
      </div>

      <div style={{ padding: "20px" }} className={`middle ${menuOpen ? "open" : ""}`}>
        <span className="hover1">Home</span>
        <span className="hover2">Catalog</span>
        <span className="hover3">Shop</span>
        <span className="hover4">Pages</span>
        <span className="hover5">Blog</span>
        <span className="hover6">Docs</span>
      </div>

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
              <button className="small-signin">Signin</button>
            </Link>
          )}
        </div>
      </div>

      <div className="mobile-menu">
        <MenuIcon onClick={handleMenuToggle} />
      </div>

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

          <div className="mobile-signin">
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
                <button className="small-signin" style={{width:'100px'}}>Signin</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Herotype;
