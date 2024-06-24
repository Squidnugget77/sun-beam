import React from 'react';
import './heroSection.css';

const HeroSection = () => {
    return (
        <>
            <div className="hero-image">
            <header className="header">
                <div className="logo">Sun Beam</div>
                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#">Pages</a>
                    <a href="#">Blog</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Shop</a>
                    <a href="#">Elements</a>
                </nav>
            </header>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="archivo-black-regular">Positive News</h1>
                    <p>Start your morning right with exciting news about the good in the world.</p>
                    <button>Sign up and download today</button>
                </div>
            </section>
            </div>
        </>
    );
};

export default HeroSection;
