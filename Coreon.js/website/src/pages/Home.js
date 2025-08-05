import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <header className="home-header">
                <h1>Welcome to Coreon.js</h1>
                <p>Your super advanced full stack JavaScript framework.</p>
                <a href="#features" className="cta-button">Explore Features</a>
            </header>
            <section id="features" className="features-section">
                <h2>Features</h2>
                <div className="feature-list">
                    {/* Feature cards will be dynamically generated here */}
                </div>
            </section>
            <section className="about-section">
                <h2>About Coreon.js</h2>
                <p>Coreon.js is designed to provide developers with a comprehensive set of tools and features to build modern web applications efficiently.</p>
            </section>
            <Footer />
        </div>
    );
};

export default Home;