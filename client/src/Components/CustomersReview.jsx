import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import client1 from '../assets/images/Client-1.jpg'; 
import client2 from '../assets/images/Client-2.jpg';
import client3 from '../assets/images/Client-3.webp';

export default function CustomersReview() {
  const testimonials = [
    {
      name: "Emily Smith",
      image: client1,
      review: "The Hideaway Resort exceeded my expectations. The service was exceptional and the environment was very peaceful.",
      description: "Emily appreciated the tranquil setting and attentive staff that made her weekend retreat truly relaxing and rejuvenating. She highlights how every small detail, from the room setup to the dining experience, contributed to her overall satisfaction.",
      rating: 5
    },
    {
      name: "John Doe",
      image: client2,
      review: "A relaxing getaway. The room was clean and cozy, and I loved the spa facilities!",
      description: "John enjoyed the comfort and cleanliness of the rooms and was especially impressed with the spa treatments offered. The serene ambiance and professional therapists helped him unwind and recharge during his stay.",
      rating: 4
    },
    {
      name: "Sophia Lee",
      image: client3,
      review: "Incredible hospitality! The staff went above and beyond to make our stay unforgettable.",
      description: "Sophia commended the friendly and helpful staff who made her and her family feel right at home. She noted personalized touches like customized tour suggestions and quick assistance which truly enhanced her vacation experience.",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Helper to render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for(let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i} style={{color: i <= rating ? '#a7f3d0' : '#ddd', fontSize: '22px', marginRight: '3px'}}>
          { i <= rating ? '★' : '☆' }
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={{ maxWidth: '900px', margin: '80px auto', textAlign: 'start', padding: '0 20px' }}>
      <p style={{fontWeight: 'bold'}}>Testimonial</p>
      <h2 style={{ marginBottom: '40px', fontSize: '40px', fontWeight: 'bold' }}>
        What Our Clients Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', textAlign: 'left', justifyContent: 'center', padding: '20px' }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #a7f3d0'
                }}
              />
              <div style={{ maxWidth: '600px' }}>
                <div style={{ marginBottom: '8px' }}>
                  {renderStars(testimonial.rating)}
                </div>
                <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6', color: '#444', position: 'relative', paddingLeft: '30px' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, fontSize: '24px', color: '#a7f3d0' }}>“</span>
                  {testimonial.review}
                  <span style={{ fontSize: '24px', color: '#a7f3d0' }}>”</span>
                </p>
                <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#000' }}>
                  — {testimonial.name}
                </p>
                <p style={{ marginTop: '10px', fontSize: '18px', color: '#666' }}>
                  {testimonial.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
