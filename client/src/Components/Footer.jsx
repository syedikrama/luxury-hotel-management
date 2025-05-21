import React from 'react';
import footerimg from '../assets/images/Footer.png';

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${footerimg})`,
        minHeight: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '40px 20px',
        marginTop: '100px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '65px' }}>
        <h2 style={{ fontSize: '2rem' }}>
          Join the <em>Hideaway</em> Newsletters
        </h2>
        <p style={{ fontSize: '1rem' }}>
          Subscribe to our mailing list to receive updates and promotional offers.
        </p>
        <div
          style={{
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '10px 15px',
              border: 'none',
              outline: 'none',
              width: '90%',
              maxWidth: '300px',
              fontSize: '1rem',
              borderRadius: '4px',
            }}
          />
          <button
            style={{
              padding: '10px 22px',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = 'black';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '30px',
          gap: '15px',
        }}
      >
        <p style={{ margin: 0, fontSize: '0.9rem', textAlign: 'center' }}>
          © Hideaway 2018 | Template crafted by{' '}
          <a href="https://themewagon.com" style={{ color: '#ffcc00' }}>
            Themewagon
          </a>
        </p>
        <nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#home" style={navStyle}>
            Home
          </a>
          <a href="#about" style={navStyle}>
            About
          </a>
          <a href="#services" style={navStyle}>
            Services
          </a>
          <a href="#contact" style={navStyle}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

const navStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
};
