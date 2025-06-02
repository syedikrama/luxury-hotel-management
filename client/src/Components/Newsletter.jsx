import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <p className="newsletter-subtitle">News letters</p>
        <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
        <p className="newsletter-description">
          With the subscription, enjoy your favourite hotels without having to think about it.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
