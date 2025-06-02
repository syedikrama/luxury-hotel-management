import React from 'react';
import './Aboutus.css';
import about1 from '../assets/images/about-1.png'
import about2 from '../assets/images/about-2.png'


export default function AboutUs() {
  return (
    <section className="about-container">
      {/* Images */}
      <div className="about-images">
        <img src={about1} alt="Hotel" className="img-main" />

        <img src={about2} alt="Bedroom" className="img-overlay2" />
      </div>

   {/* Text Content */}
<div className="about-text">
  <p className="section-title">About Us</p>
  <h2 className="main-heading">
    Most Safe & Rated <br /> Hotel In London
  </h2>
  <p className="description">
    Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. We pride ourselves on providing an exceptional stay with personalized services tailored to your needs.
  </p>
  <p className="description">
    Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Suspendisse varius amet eget lorem tempus blandit. Our team is dedicated to ensuring comfort, safety, and unforgettable experiences for all our guests.
  </p>
  <ul className="features-list">
    <li>✅ 24 Month / 24,000km Nationwide Warranty monotone</li>
    <li>✅ Curabitur dapibus nisl a una congue, in pharetra urna accumsan.</li>
    <li>✅ Customer Rewards Program and excellent technology</li>
  </ul>
  <button className="discover-btn">DISCOVER MORE</button>
</div>

    </section>
  );
}
