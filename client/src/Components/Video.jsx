import React, { useState } from 'react';
import videoSrc from '../assets/Video/Hotel.mp4';
import videobg from '../assets/images/video-bg.png';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false); // Switch back to background image
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {isPlaying ? (
        <video
          src={videoSrc}
          controls
          autoPlay
          muted
          onEnded={handleVideoEnd}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: 0,
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${videobg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '500px',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => setIsPlaying(true)}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0,0,0,0.5)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <h1
            style={{
              position: 'absolute',
              top: '75%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 300,
              letterSpacing: '2px',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
              maxWidth: '90%',
              textAlign: 'center',
              userSelect: 'none',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Take a tour of Our Luxury Suites
          </h1>
        </div>
      )}
    </div>
  );
}
