import React from 'react';
import './OurServices.css';
import { FaPlane, FaUtensils, FaBaby, FaTshirt, FaCar, FaCocktail } from 'react-icons/fa';

const services = [
  { icon: <FaPlane />, title: 'Travel Plan', desc: 'We arrange comfortable travel plans for your perfect vacation.' },
  { icon: <FaUtensils />, title: 'Catering Service', desc: 'Delicious meals served right to your room, anytime.' },
  { icon: <FaBaby />, title: 'Babysitting', desc: 'Trustworthy babysitting services for your peace of mind.' },
  { icon: <FaTshirt />, title: 'Laundry', desc: 'Quick and fresh laundry service available daily.' },
  { icon: <FaCar />, title: 'Hire Driver', desc: 'Professional drivers available for your travel needs.' },
  { icon: <FaCocktail />, title: 'Bar & Drink', desc: 'Relax at our bar with a wide variety of beverages.' },
];

export default function OurServices() {
  return (
   <div className="services-container">
  {/* Title */}
  <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 20px'}}>
    <div className="services-header">
      <h2 style={{ marginTop: '10px' }}>
        Our <em>Services</em> & Hospitality
      </h2>
      
    </div>
  </div>

  {/* Cards Grid */}
 <div className="services-grid">
    {services.map((service, index) => (
      <div className="service-card" key={index}>
        <div className="service-icon">{service.icon}</div>
        <h4>{service.title}</h4>
        <p>{service.desc}</p>
      </div>
    ))}
  </div>
</div>

  );
}
