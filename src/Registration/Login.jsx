import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase/Firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!", { position: "top-center" });

      // Store the email in localStorage after login
      localStorage.setItem('userEmail', email);
      
      setTimeout(() => navigate("/app"), 1000);
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <form onSubmit={handleLogin} className="form">
          <h2>Welcome Back</h2>
          <p>Login to continue</p>
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
            <input
              type={visible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              style={{
                width: '25px',
                height: '20px',
                position: 'relative',
                left: '190px',
                top: '-50px',
              }}
              onClick={() => setVisible(!visible)}
            >
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
          <button type="submit" className="btn">Login</button>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
