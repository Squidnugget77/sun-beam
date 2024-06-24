import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>We're Scoda Agency</h2>
      <p>The way we work is fun.</p>
      <div className="service-cards">
        <div className="service-card">
          <h3>Branding</h3>
          <p>Details about branding service.</p>
        </div>
        <div className="service-card">
          <h3>Design & Development</h3>
          <p>Details about design & development service.</p>
        </div>
        <div className="service-card">
          <h3>Marketing</h3>
          <p>Details about marketing service.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
