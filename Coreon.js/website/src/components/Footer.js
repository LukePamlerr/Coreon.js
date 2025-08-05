import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Coreon.js. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/docs">Documentation</a></li>
                    <li><a href="/showcase">Showcase</a></li>
                </ul>
            </div>
            <div className="footer-socials">
                <a href="https://github.com/CoreonJS" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com/CoreonJS" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com/company/coreonjs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;