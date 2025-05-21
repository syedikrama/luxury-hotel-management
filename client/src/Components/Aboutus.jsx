import React from 'react';
import './Aboutus.css';

const sections = [
  {
    title: 'GENUINE SERVICE',
    text: `Our guests are our number one priority. Our caring and sincere colleagues strive to anticipate every need and take the initiative to provide warm, sincere service. We encourage our team to take ownership of guest satisfaction and provide innovation and excellence in everything we do.`,
    img: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/exp-langham-pillar-genuine-service-1680x945:Medium?wid=1013&hei=569',
    reverse: false,
  },
  {
    title: 'ELEGANT SPACES',
    text: `Our spaces are designed with timeless elegance and refined comfort. We believe luxury is in the details – from refined furnishings to inspiring interiors.`,
    img: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/TLSYD_Lobby_Lounge_2021_lores_RGB:Medium?wid=1013&hei=570',
    reverse: true,
  },
  {
    title: 'UNFORGETTABLE DINING',
    text: `Taste is an experience. Our world-class dining combines the finest ingredients with global culinary expertise to create lasting memories.`,
    img: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/TLSYD_Palm-Court_Afternoon-Tea_2015_lores:Medium?wid=1013&hei=570',
    reverse: false,
  },
  {
    title: 'WELLNESS & SERENITY',
    text: `We provide holistic wellness offerings that balance mind, body, and spirit. Guests can rejuvenate with our spa, fitness, and mindfulness programs.`,
    img: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlbos-did-you-know-iconic-art-collection:Medium?wid=1013&hei=570',
    reverse: true,
  }
];

export default function AboutUs() {
  return (
   <div className="aboutus-wrapper">
  <h1>About <em>Us</em></h1>
  <p className="aboutus-description">
    We are a passionate team dedicated to delivering high-quality solutions and exceptional services. Our mission is to provide value through innovation, commitment, and a strong customer focus. Learn more about who we are and what we do in the sections below.
  </p>
  {sections.map((section, index) => (
    <div
      className={`aboutus-section ${section.reverse ? 'reverse' : ''}`}
      key={index}
    >
      <div className="aboutus-image">
        <img src={section.img} alt={section.title} />
      </div>
      <div className="aboutus-text">
        <h2>{section.title}</h2>
        <p>{section.text}</p>
      </div>
    </div>
  ))}
</div>

  );
}
