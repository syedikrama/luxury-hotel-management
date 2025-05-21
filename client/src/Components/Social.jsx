import React from 'react';
import './Social.css';

// Importing images from assets folder
import socialImage1 from '../assets/images/Socail-1.jpg';
import socialImage2 from '../assets/images/Socail-2.jpg';
import socialImage3 from '../assets/images/Socail-3.jpg';
import socialImage4 from '../assets/images/Socail-4.jpg';
import socialImage5 from '../assets/images/Socail-5.jpg';
import socialImage6 from '../assets/images/Socail-6.jpg';

export default function Social() {
  return (
    <div className="social-container">
      <div className="address-social-container">
        <div className="address">
          <p>123 Fake Street, Stone Ridge, NY 12345</p>
        </div>
        <div className="social-links" style={{marginRight :"300px"}}>
          <p>Instagram / Facebook / Twitter</p>
        </div>
      </div>
      <div className="social-media">
        <div className="left-image">
          <img src={socialImage1} alt="Left" />
        </div>
        <div className="right-images">
          <div className="row">
            <img src={socialImage2} alt="Image 2" />
            <img src={socialImage3} alt="Image 3" />
            <img src={socialImage4} alt="Image 4" />
          </div>
          <div className="row">
            <img src={socialImage5} alt="Image 5" />
            <img src={socialImage6} alt="Image 6" />
            <img src={socialImage2} alt="Image 7" />
          </div>
        </div>
      </div>
    </div>
  );
}
