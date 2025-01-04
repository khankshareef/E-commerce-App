import { signOut } from "firebase/auth";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

function Signout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
  
    return (
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    );
  };

export default Signout