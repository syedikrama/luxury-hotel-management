import React from 'react';
import './BookingForm.css';
import booking from '../assets/images/Bookings.png'

export default function BookingForm() {
  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-form">
          <h5 className="booking-subtitle">Make Appointment</h5>
          <h2 className="booking-title">Book A Room</h2>

          <div className="booking-grid">
            <div className="booking-input">
              <label>Check In Date</label>
              <input type="date" />
            </div>
            <div className="booking-input">
              <label>Check Out Date</label>
              <input type="date" />
            </div>
            <div className="booking-input">
              <label>Adults</label>
              <select>
                <option>Adults</option>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
              </select>
            </div>
            <div className="booking-input">
              <label>Room</label>
              <select>
                <option>Room</option>
                <option>Deluxe</option>
                <option>Luxury</option>
                <option>Suite</option>
              </select>
            </div>
          </div>

          <button className="booking-button">BOOK TABLE NOW</button>
        </div>

        <div className="booking-image">
          <img
            src= {booking}
            alt="Hotel"
          />
        </div>
      </div>
    </section>
  );
}
