import React from 'react';
import './Facilities.css';

export default function Facilities() {
  return (
    <section className="facilities">
      <div className="facilities__container">
        <p className="facilities__subtitle">— <em>Facilities</em> —</p>
        <h2 className="facilities__title">Hotel Facilities</h2>

        <div className="facilities__grid">
          <div className="facility-card">
            <img
              src="https://moonlit-react.netlify.app/assets/images/icon/bed.svg"
              alt="Rooms and Suites"
              className="facility-card__icon"
            />
            <h3 className="facility-card__title">Rooms and Suites</h3>
            <p className="facility-card__desc">
              Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.
            </p>
          </div>

          <div className="facility-card">
            <img
              src="https://moonlit-react.netlify.app/assets/images/icon/security.svg"
              alt="24-Hour Security"
              className="facility-card__icon"
            />
            <h3 className="facility-card__title">24-Hour Security</h3>
            <p className="facility-card__desc">
              On-site security personnel and best surveillance. Secure storage for valuables.
            </p>
          </div>

          <div className="facility-card">
            <img
              src="https://moonlit-react.netlify.app/assets/images/icon/gym.svg"
              alt="Fitness Center"
              className="facility-card__icon"
            />
            <h3 className="facility-card__title">Fitness Center</h3>
            <p className="facility-card__desc">
              Equipped with exercise machines and weights. Offering massages, facials, and other treatments.
            </p>
          </div>

          <div className="facility-card">
            <img
              src="https://moonlit-react.netlify.app/assets/images/icon/swimming-pool.svg"
              alt="Swimming Pool"
              className="facility-card__icon"
            />
            <h3 className="facility-card__title">Swimming Pool</h3>
            <p className="facility-card__desc">
              Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
