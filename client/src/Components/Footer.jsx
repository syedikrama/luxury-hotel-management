import React from 'react';
import './Footer.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer({ withBackgroundImage = false }) {
  return (
    <footer className={`footer-container ${withBackgroundImage ? 'with-bg-image' : ''}`}>
      {withBackgroundImage && <div className="footer-overlay"></div>}

      <div className="footer-content" style={{ marginTop: '50px', textAlign: 'start' }}>
        {/* First Column - Contact Info */}
        <div className="footer-column">
          <h2 className="footer-logo">Hideway</h2>
          <div className="contact-info">
            <p><FaPhoneAlt /> 1800-121-3637</p>
          
          </div>
          <div className="email-info">
            <p><FaEnvelope /> info@example.com</p>
          
          </div>
          <div className="address">
            <p><FaMapMarkerAlt /> 20/plot No. 20, 5th phase,</p>
            <p>LIB Colony, Japan</p>
          </div>
          
        </div>

        {/* Second Column - Our Links */}
        <div className="footer-column">
          <h3 className="footer-title">Our Links</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Third Column - Our Services */}
        <div className="footer-column">
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-links">
            <li>FAQ</li>
            <li>Support</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Fourth Column - Newsletter */}
        <div className="footer-column">
          <h3 className="footer-title">Subscribe To Our Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Your Email..." />
            <button className="subscribe-btn">✔️</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>Copyright © 2025. All Rights Reserved By KZinfoscan</p>
      </div>
    </footer>
  );
}
