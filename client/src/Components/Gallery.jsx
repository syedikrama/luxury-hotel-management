import React from 'react';
import './Gallery.css';

import GalleryImg from '../assets/images/Gallery.jpg';
import Amenties from '../assets/images/Amneties.jpg';
import Package from '../assets/images/Package.jpg';

export default function Gallery() {
    return (
        <div className="gallery-section">
            <div className="gallery-grid">
                <div
                    className="gallery-card"
                    style={{ backgroundImage: `url(${GalleryImg})` }}
                >
                    <h2>Gallery</h2>
                </div>
                <div
                    className="gallery-card bordered"
                    style={{ backgroundImage: `url(${Amenties})` }}
                >
                    <h2>Amenities</h2>
                </div>
                <div
                    className="gallery-card"
                    style={{ backgroundImage: `url(${Package})` }}
                >
                    <h2>Packages</h2>
                </div>
            </div>

            <div className="gallery-text-section">
                <h2>
                    An <em>inviting</em> escape
                </h2>
                <p>
                    Discover a luxurious retreat where elegance meets comfort. Our hotel
                    offers beautifully designed rooms, world-class amenities, and tailored
                    packages to make your stay unforgettable. Whether you're here for
                    relaxation or adventure, every detail is crafted to exceed your
                    expectations. Explore the gallery, amenities, and exclusive packages
                    to begin your journey.
                </p>
                <button className="history-btn">Our History</button>
            </div>
        </div>
    );
}
