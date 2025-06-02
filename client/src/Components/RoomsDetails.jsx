import React from 'react';
import './RoomsDetails.css';

export default function RoomsDetails() {
  return (
    <div className="rooms-container">
      <div className="room-details">
        <div className="room-images">
          <img src="https://react.mediacity.co.in/riorelax/assets/img/bg/single-room-img01.png" alt="room" className="room-img main-img" />
          <img src="https://react.mediacity.co.in/riorelax/assets/img/bg/single-room-img02.png" alt="room" className="room-img" />
          <img src="https://react.mediacity.co.in/riorelax/assets/img/bg/single-room-img03.png" alt="room" className="room-img" />
        </div>

        <div className="room-header">
          <h2>Double Room</h2>
          <p className="price">$400 <span>/Night</span></p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="room-description">
          <p>Understated seaside elegance, traditional grace, complemented by warm homely touches and pops of modern flair...</p>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus curabitur arcu sit amet est suscipit...</p>
        </div>

        <div className="room-features">
          <h3>Room Features</h3>
          <div className="features-list">
            <span>📺 TV</span>
            <span>📶 Free Wifi</span>
            <span>❄️ Air Condition</span>
            <span>🔥 Heater</span>
            <span>📞 Phone</span>
            <span>🧺 Laundry</span>
            <span>👥 Adults: 2</span>
            <span>📐 Size: 24m²</span>
            <span>🛏️ Bed Type: One bed</span>
          </div>
        </div>

        <div className="room-children">
          <h3>Children and Extra Beds</h3>
          <p>Children are welcome. Kids stay free! Children stay free when using existing bedding...</p>
          <p>We also provide baby cots for infants upon request at no additional cost. Guests traveling with family will appreciate our spacious layout and flexible sleeping arrangements. Let us know your special requirements during booking, and we’ll ensure your family’s comfort.</p>
        </div>

        <button className="book-room-btn">BOOK THIS ROOM</button>
      </div>

      <div className="room-booking">
        <div className="booking-form">
          <h3>Book A Room</h3>
          <div className="form-group">
            <label>Check In Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Check Out Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Adults</label>
            <select>
              <option>Adults</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="form-group">
            <label>Room Type</label>
            <select>
              <option>Select Room</option>
              <option>Single</option>
              <option>Double</option>
              <option>Deluxe</option>
            </select>
          </div>
          <button className="book-now-btn">BOOK NOW</button>
        </div>

        <div className="help-box">
          <h4>Need Help?</h4>
          <div className="contact-number">+91 705 2101 786</div>
        </div>
      </div>
    </div>
  );
}
