import React, { useState } from 'react';
import './Dinning.css';

const images = [
  {
    src: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/tljkt_tang_court_main_dining_east_2023:Medium?wid=1013&hei=569', // Replace with your actual paths
    title: "JAKARTA - T'ANG COURT"
  },
  {
    src: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/TLLON_ARTESIAN_JUNE2021-1:Medium?wid=1013&hei=569',
    title: 'LONDON - ARTS BAR'
  },
  {
    src: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/IMG_0071:Medium?wid=1013&hei=570',
    title: 'PARIS - LE GRAND DINER'
  },
  {
    src: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlszx-treasures-and-scent-02_optimised:Medium?wid=1013&hei=569',
    title: 'TOKYO - NOBU STYLE'
  },
];

export default function Dinning() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  return (
    <div className="dinning-container">
      <h1 style={{marginBottom :"60px"}}>Our World <em>Class Dinning</em></h1>
      <p className="aboutus-description" style={{marginBottom :"60px"}}>
        Welcome to our world-class dining experience, where culinary artistry meets exceptional service. From elegant ambiance to carefully curated menus, we bring you a taste of excellence in every bite. Discover the essence of fine dining through our diverse selections and unforgettable flavors.
      </p>

      <div className="dinning-slider">
        <div className="dinning-images">
          <img src={images[prevIndex].src} className="side-img" alt="preview-left" />
          <div className="dinning-arrow" onClick={prevSlide}>&lt;</div>

          <img src={images[current].src} className="main-img" alt="main" />
          <div className="dinning-arrow" onClick={nextSlide}>&gt;</div>

          <img src={images[nextIndex].src} className="side-img" alt="preview-right" />
        </div>
      </div>
      <div className="dinning-pagination">{`${current + 1}/${images.length}`}</div>
      <div className="dinning-location">{images[current].title}</div>
    </div>
  );
}
