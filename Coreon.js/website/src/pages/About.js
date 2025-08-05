import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Coreon.js</h1>
            <p>
                Coreon.js is a super advanced full stack JavaScript framework designed to empower developers with a comprehensive set of tools and features. With over 200 advanced functionalities, Coreon.js streamlines the development process, allowing for rapid application development while maintaining high performance and security standards.
            </p>
            <h2>Key Features</h2>
            <ul>
                <li>Robust API support (REST, GraphQL, WebSocket)</li>
                <li>Advanced middleware for authentication, caching, and rate limiting</li>
                <li>Built-in logging and error handling utilities</li>
                <li>Flexible database management with ORM and migrations</li>
                <li>Plugin architecture for extensibility</li>
                <li>Comprehensive testing framework</li>
                <li>Real-time analytics and notification services</li>
                <li>Customizable themes and animations for the frontend</li>
                <li>And much more!</li>
            </ul>
            <h2>Getting Started</h2>
            <p>
                To get started with Coreon.js, check out our <a href="/docs.html">documentation</a> for installation instructions and usage examples.
            </p>
        </div>
    );
};

export default About;