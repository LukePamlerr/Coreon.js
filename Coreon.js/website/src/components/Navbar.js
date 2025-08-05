import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/images/logo.svg" alt="Coreon.js Logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/docs">Documentation</Link>
                </li>
                <li>
                    <Link to="/showcase">Showcase</Link>
                </li>
            </ul>
            <div className="navbar-actions">
                <button className="btn-login">Login</button>
                <button className="btn-signup">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;