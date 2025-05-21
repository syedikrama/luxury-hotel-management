import React, { useState } from 'react';
import videoSrc from '../assets/Video/Hotel.mp4';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const bannerImage = 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/langham-pasadena-pool-tanveer-badal-lores-1?wid=1920&hei=1281';

  return (
    <div style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}>
      {isPlaying ? (
        <video
          src={videoSrc}
          controls
          autoPlay
          muted
          style={{
            width: '100vw',
            height: 'auto',
            borderRadius: 0,
          }}
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '500px',
            cursor: 'pointer',
          }}
          onClick={() => setIsPlaying(true)}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0,0,0,0.6)',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
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
        </div>
      )}
    </div>
  );
}
