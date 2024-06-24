import React from 'react';
import './stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat">
        <h3>5600</h3>
        <p>Cups of tea</p>
      </div>
      <div className="stat">
        <h3>220</h3>
        <p>Years of experience</p>
      </div>
      <div className="stat">
        <h3>108</h3>
        <p>Hours of project</p>
      </div>
      <div className="stat">
        <h3>650</h3>
        <p>Project wins</p>
      </div>
    </section>
  );
};

export default Stats;
