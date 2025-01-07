import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase/Firebase";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    // Ensure password is at least 8 characters long
    return password.length >= 8;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate password
    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 8 characters long.",
        { position: "top-center" }
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
       toast.success("Registration successful!",{ position: "top-center" },  { autoClose: 3000 }); // For specific toasts
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <form onSubmit={handleRegister} className="form">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
                type="button"
                style={{width:'25px',height:'20px',position:'relative',left:'190px',top:'-50px'}}onClick={() => setVisible(!visible)}
              >
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
          </div>
          <button type="submit" className="btn">Register</button>
          <p>
            Already have an account? <Link to='/login'><span>Login</span></Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;