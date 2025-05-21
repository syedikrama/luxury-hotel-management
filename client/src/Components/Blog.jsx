import React from 'react';
import './Blog.css';

// Import your images (replace with actual image paths)
import tremblantImg from '../assets/images/tremblant.jpg';
import caravanImg from '../assets/images/caravan.jpg';
import canyonImg from '../assets/images/canyon.jpg';
import postcardImg from '../assets/images/postcard.jpg';
import virginiaImg from '../assets/images/virginia.jpg'; 
import bryceImg from '../assets/images/bryce.webp';
import motorhomeImg from '../assets/images/motorhome.jpg';
import lagosImg from '../assets/images/lagos.jpg';

export default function Blog() {
  return (
    <div className="blog-container">
          <h1 style={{margin :"50px"}}>Our <em>Blog</em></h1>

      <div className="blog-grid">
        {/* First row */}
        <div className="blog-item">
          <div className="blog-image">
            <img src={tremblantImg} alt="Tremblant in Canada" />
          </div>
          <button className="blog-category" >TRAVEL TRIP</button>
          <h3 className="blog-title">Tremblant in Canada</h3>
          <div className="blog-date">13TH APRIL 2019</div>
        </div>
        
        <div className="blog-item">
          <div className="blog-image">
            <img src={caravanImg} alt="Choosing A Static Caravan" />
          </div>
          <button className="blog-category">CAMPING</button>
          <h3 className="blog-title">Choosing A Static Caravan</h3>
          <div className="blog-date">13TH APRIL, 2019</div>
        </div>
        
        <div className="blog-item">
          <div className="blog-image">
            <img src={canyonImg} alt="Copper Canyon" />
          </div>
          <button className="blog-category">EXERT</button>
          <h3 className="blog-title">Copper Canyon</h3>
          <div className="blog-date">13TH APRIL2019</div>
        </div>
        
        
        <div className="blog-item">
          <div className="blog-image">
            <img src={postcardImg} alt="A Time Travel Postcard" />
          </div>
          <button className="blog-category" style={{marginRight :"25px"}}>TRAVEL TRIP</button>
          <h3 className="blog-title">A Time Travel Postcard</h3>
          <div className="blog-date">27TH APRIL2019</div>
        </div>
        
        <div className="blog-item">
          <div className="blog-image">
            <img src={virginiaImg} alt="Virginia Travel For Kids" />
          </div>
          <button className="blog-category">EXERT & TRAVEL</button>
          <h3 className="blog-title">Virginia Travel For Kids</h3>
          <div className="blog-date">28TH APRIL,2019</div>
        </div>
        
        <div className="blog-item">
          <div className="blog-image">
            <img src={postcardImg} alt="A Time Travel Postcard" />
          </div>
          <button className="blog-category"  style={{marginRight :"45px"}}>CAMPING</button>
          <h3 className="blog-title">A Time Travel Postcard</h3>
          <div className="blog-date">28TH APRIL,2019</div>
        </div>
        
        {/* Third row */}
        <div className="blog-item">
          <div className="blog-image">
            <img src={bryceImg} alt="Bryce Canyon A Stunning" />
          </div>
          <button className="blog-category"  style={{marginRight :"25px"}}>TRAVEL TRIP</button>
          <h3 className="blog-title">Bryce Canyon A Stunning</h3>
          <div className="blog-date">29TH APRIL,2019</div>
        </div>
        
        <div className="blog-item">
          <div className="blog-image">
            <img src={motorhomeImg} alt="Motorhome Or Trailer" />
          </div>
          <button className="blog-category">EXERT & TRAVEL</button>
          <h3 className="blog-title">Motorhome Or Trailer</h3>
          <div className="blog-date">30TH APRIL,2019</div>
        </div>
        
        <div className="blog-item">
          <div className="blog-image">
            <img src={lagosImg} alt="Lost In Lagos Portugal" />
          </div>
          <button className="blog-category" style={{marginRight :"45px"}}>CAMPING</button>
          <h3 className="blog-title">Lost In Lagos Portugal</h3>
          <div className="blog-date">30TH APRIL,2019</div>
        </div>
      </div>
      
      <button className="load-more-btn">LOAD MORE</button>
    </div>
  );
}