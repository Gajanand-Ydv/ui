

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
            <div className="login-container" data-aos="zoom-in">
                <Link to="/" className="back-to-home">
                    <i data-feather="arrow-left"></i> Back to Home
                </Link>

                <div className="login-header">
                    <img src={logoImage} alt="Krishi Sahayak Logo" className="login-logo" />
                    <h2>Welcome Back!</h2>
                    <p>Login to your Krishi Sahayak account to continue.</p>
                </div>

                <form className="login-form" onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <i data-feather="mail" className="input-icon"></i>
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-group">
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
        </div>
        </div>
    );
};

export default Login;