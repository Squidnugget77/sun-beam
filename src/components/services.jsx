import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>This is Sun Beam</h2>
      <p>Start your morning right with good news</p>
      <div className="service-cards">
        <div className="service-card">
          <h3>Feature 1</h3>
          <p>Details about the first feature.</p>
        </div>
        <div className="service-card">
          <h3>Feature 2</h3>
          <p>Details about the second feature</p>
        </div>
        <div className="service-card">
          <h3>Feature 3</h3>
          <p>Details about the third feature</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
