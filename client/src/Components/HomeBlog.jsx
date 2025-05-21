import React from 'react';

export default function HomeBlog() {
  const images = [
    'https://prium.github.io/hideaway/assets/images/feature/3.jpg',
    'https://prium.github.io/hideaway/assets/images/feature/8.jpg',
    'https://prium.github.io/hideaway/assets/images/feature/5.jpg',
    'https://prium.github.io/hideaway/assets/images/feature/1.jpg',
    'https://prium.github.io/hideaway/assets/images/feature/6.jpg',
    'https://prium.github.io/hideaway/assets/images/feature/12.jpg',
  ];

  return (
    <div style={{ padding: '60px 40px', fontFamily: 'serif' }}>
      {/* Top row: address and social links */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' , gap :"270px" }}>
        <p style={{ fontSize: '15px' }}>123 Fake Street, Stone Ridge, NY 12345</p>
        <p style={{ fontSize: '15px' }}>Instagram / Facebook / Twitter</p>
      </div>

      {/* Main content row */}
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Left box with image only */}
        <div style={{
          width: '450px',
          height: '400px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src="https://prium.github.io/hideaway/assets/images/feature/3.jpg"
            alt="Placeholder"
            style={{ width: '450px', height: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Right side: 3x2 grid of images */}
        <div style={{ width: '400px', marginTop :"25px" , marginRight :"60px" }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}>
            {images.map((img, index) => (
              <div key={index} style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' ,  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
