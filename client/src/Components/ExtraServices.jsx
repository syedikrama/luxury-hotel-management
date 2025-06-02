import React from 'react';
import { FaCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ExtraServices() {
  const services = [
    {
      title: 'Room Cleaning',
      price: '$39.99',
      description: 'Perfect for early-stage startups',
      features: [
        'Hotel quis justo at lorem',
        'Fusce sodales, urna et tempus',
        'Vestibulum blandit lorem quis',
      ],
      badge: 'Monthly',
    },
    {
      title: 'Room Cleaning Plus',
      price: '$59.99',
      description: 'Includes laundry and flexible scheduling',
      features: [
        'Includes laundry service',
        'Air freshener and hygiene kit',
        'Flexible cleaning schedule',
      ],
      badge: 'Monthly',
    },
  ];

  return (
    <div className="container py-5"  style={{marginTop :"60px"}}>
      <div className="d-flex gap-4 align-items-start">
        {/* Left side text */}
        <div style={{ flex: '1 1 40%', textAlign: 'start' }}>
          <h6 className="text-uppercase fw-semibold text-brown">Best Prices</h6>
          <h1 className="fw-bold display-5">Extra Services</h1>
          <p className="text-muted mt-4" style={{ textAlign: 'start' }}>
            Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget
            neque viverra, sed interdum metus interdum. Vivamus a justo et arcu tristique
            dignissim non in felis. Nunc fringilla nisl non tortor efficitur, ac pretium magna sodales.
          </p>
          <p className="text-muted" style={{ textAlign: 'start' }}>
            Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id
            ultricies elit. Suspendisse varius ante eget. In commodo mi lectus, venenatis
            suscipit metus egestas et.
          </p>
        </div>

        {/* Cards container */}
        <div className="d-flex flex-wrap gap-4" style={{ flex: '1 1 55%' }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="card shadow-sm border-0 position-relative"
              style={{ width: '280px', flex: '1 1 45%' }}
            >
              {/* Badge */}
              <span
                className="badge text-dark position-absolute top-0 end-0 m-3 rounded-pill fw-semibold"
                style={{ 
                  backgroundColor: '#e4e1e4', 
                  padding: '0.5rem 1rem', 
                  fontSize: '0.9rem' 
                }}
              >
                {service.badge}
              </span>

              <div className="card-body px-4 py-5" style={{ textAlign: 'start' }}>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted small mb-3">{service.description}</p>
                <h2 className="fw-bold" style={{ color: '#563A21' }}>
                  {service.price}
                </h2>
                <ul className="list-unstyled mt-4 mb-5 text-muted">
                  {service.features.map((feature, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <FaCheck className="text-success me-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn w-100 fw-semibold text-uppercase"
                  style={{ backgroundColor: '#563A21', color: 'white' }}
                >
                  Get Started <span className="ms-2">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
