import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Destination.css';

const destinations = [
  {
    id: 1,
    title: "The Ritz-Carlton, Dubai",
    image: "https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/rz/emea/hws/d/dxbrz/en_us/photo/unlimited/assets/rz-dxbrz-serene-retreat-37952-classic-ver.jpg?wid=269&fit=constrain",
  },
  {
    id: 2,
    title: "Zadún, a Ritz-Carlton Reserve",
    image: "https://cache.marriott.com/is/image/marriotts7prod/rz-sjdzr-zadun-32988-16383:Classic-Ver?wid=538&fit=constrain",
  },
  {
    id: 3,
    title: "The Ritz-Carlton, Jeddah",
    image: "https://cache.marriott.com/is/image/marriotts7prod/jedrj-exterior-50771610:Classic-Ver?wid=538&fit=constrain",
  },
  {
    id: 4,
    title: "The Ritz-Carlton Hotel de la Paix, Geneva",
    image: "https://cache.marriott.com/is/image/marriotts7prod/rz-gvarz-lake-g-boat-tour-18968-99133:Classic-Ver?wid=538&fit=constrain",
  },
  {
    id: 5,
    title: "The Ritz-Carlton, Bali",
    image: "https://cache.marriott.com/is/image/marriotts7prod/rz-fukrz-genjyu-tea-bar-18767:Classic-Ver?wid=538&fit=constrain",
  },
   {
    id: 6,
    title: "The Ritz-Carlton, St. Thomas",
    image: "https://cache.marriott.com/is/image/marriotts7prod/rz-sttrz-aerial-resort-23195-12850:Classic-Ver?wid=538&fit=constrain",
  },
   {
    id: 7,
    title: "The Ritz-Carlton, San Fransisco",
    image: "https://cache.marriott.com/is/image/marriotts7prod/rz-sforz-balcony-views-31194:Classic-Ver?wid=328&fit=constrain",
  },

];

export default function Destination() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container py-5">
      <div className="mb-4 text-center">
        <h5 className="text-muted" style={{marginTop :"20px" , marginBottom :""}}><em>Destinations</em></h5>
        <h2 className="fw-bold">JOURNEY <em>FARTHER</em></h2>
      </div>

      <Slider {...settings}>
        {destinations.map((item, index) => (
          <div key={item.id} className={`p-2 destination-card ${index % 2 === 0 ? 'up' : 'down'}`}>
            <div className="text-start bg-white rounded  p-3">
              <h4 className="text-warning fw-bold">0{index + 1}</h4>
              <img src={item.image} alt={item.title} className="img-fluid rounded" />
              <p className="mt-2 fw-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
