import React from 'react';
import HeroSection from './components/heroSection.jsx';
import Services from './components/services.jsx';
import Portfolio from './components/portfolio.jsx';
// import Stats from './components/Stats';
// import Footer from './components/Footer';
import './App.css';


function App() {
    return (
        <>
            <div className="App">
                <HeroSection />
                <Services />
                <Portfolio />
            </div>
        </>
    )
}

export default App
