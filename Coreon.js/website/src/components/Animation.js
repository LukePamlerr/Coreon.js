import React from 'react';
import './Animation.css';

const Animation = () => {
    return (
        <div className="animation-container">
            <h2 className="animation-title">Welcome to Coreon.js Animations</h2>
            <div className="animation-box">
                <div className="fade-in">Fade In Animation</div>
                <div className="slide-in">Slide In Animation</div>
                <div className="zoom-in">Zoom In Animation</div>
            </div>
        </div>
    );
};

export default Animation;