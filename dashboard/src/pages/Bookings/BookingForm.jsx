import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BookingForm() {
  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    guest: '',
    room: '',
    checkInDate: '',
    checkOutDate: '',
    totalAmount: '',
    status: 'reserved',
    paymentStatus: 'pending',
    additionalServices: [],
  });

  let [serviceInput, setServiceInput] = useState({ serviceName: '', price: '' });
  let [error, setError] = useState('');
  let [success, setSuccess] = useState('');

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let handleServiceChange = (e) => {
    let { name, value } = e.target;
    setServiceInput((prev) => ({ ...prev, [name]: value }));
  };

  let addService = () => {
    if (!serviceInput.serviceName || !serviceInput.price) return;

    setFormData((prev) => ({
      ...prev,
      additionalServices: [...prev.additionalServices, serviceInput],
    }));
    setServiceInput({ serviceName: '', price: '' });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch('http://localhost:3001/hms/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to create booking');

      setSuccess('Booking created successfully!');
      setError('');
      setTimeout(() => navigate('/bookings'), 1500);
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Add New Booking</h2>
      <Link to="/dashboard" className="btn btn-warning mb-3 mx-3">Go to Dashboard</Link>
    

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Guest ID</label>
          <input
            type="text"
            name="guest"
            className="form-control"
            value={formData.guest}
            onChange={handleChange}
            required
            placeholder="Enter guest ObjectId"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Room ID</label>
          <input
            type="text"
            name="room"
            className="form-control"
            value={formData.room}
            onChange={handleChange}
            required
            placeholder="Enter room ObjectId"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Check-In Date</label>
          <input
            type="date"
            name="checkInDate"
            className="form-control"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Check-Out Date</label>
          <input
            type="date"
            name="checkOutDate"
            className="form-control"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Total Amount</label>
          <input
            type="number"
            name="totalAmount"
            className="form-control"
            value={formData.totalAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="reserved">Reserved</option>
            <option value="checked-in">Checked-in</option>
            <option value="checked-out">Checked-out</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Payment Status</label>
          <select
            name="paymentStatus"
            className="form-select"
            value={formData.paymentStatus}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Add Services</label>
          <div className="d-flex gap-2">
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              className="form-control"
              value={serviceInput.serviceName}
              onChange={handleServiceChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="form-control"
              value={serviceInput.price}
              onChange={handleServiceChange}
            />
            <button type="button" className="btn btn-success" onClick={addService}>
              Add
            </button>
          </div>
          <ul className="mt-2">
            {formData.additionalServices.map((s, i) => (
              <li key={i}>
                {s.serviceName} - ${s.price}
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Booking
        </button>
      </form>
    </div>
  );
}
