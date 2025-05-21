import React from 'react';
import './Bannar.css';

export default function Bannar() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <h1>
            Eagerly <em>waiting</em> to welcome you.
          </h1>
          <button className="banner-button">BOOK YOUR STAY</button>
        </div>
      </div>
    </div>
  );
}
