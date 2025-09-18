

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Keep this for the "Back to Home" link
import feather from 'feather-icons';
import './Login.css';
import logoImage from '../assets/logo.png';



const Login = () => {
    // Initialize feather icons on component mount
    useEffect(() => {
        feather.replace();
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert('Login functionality to be implemented!');
    };

    return (
        <div className="login">
        <div className="login-page">
            <div className="login-container" data-aos="zoom-in"<a href="#" className="back-to-home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          > 
                <Link to="/" className="back-to-home">
                    <i data-feather="arrow-left"></i> </svg> Back to Home
                </Link> </a>

                <div className="login-header">
                    <img src={logoImage} alt="Krishi Sahayak Logo" className="login-logo" />
                    <h2>Welcome Back!</h2>
                    <p>Login to your Krishi Sahayak account to continue.</p>
                </div>

                <form className="login-form" onSubmit={handleFormSubmit}>
                    <div className="input-group">
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="input-icon feather feather-mail"
            >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
                        <i data-feather="mail" className="input-icon"></i>
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-group">
                        <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="20"
                         height="20"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         className="input-icon feather feather-lock"
            >
                         <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                         <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                         </svg>
                        <i data-feather="lock" className="input-icon"></i>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn-login-submit">Login</button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? Click on Register Button </p>
                </div>
            </div>
            {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{message}</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
        
    );
};

export default Login;
