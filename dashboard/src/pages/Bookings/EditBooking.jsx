import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    guest: '',
    room: '',
    checkInDate: '',
    checkOutDate: '',
    totalAmount: '',
    paymentStatus: '',
    status: '',
    additionalServices: '',
    invoiceGenerated: false,
    createdBy: ''
  });

  useEffect(() => {
    fetchBookingDetails();
  }, []);

  const fetchBookingDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/hms/bookings/${id}`);
      const b = res.data.booking || res.data;

      setBooking({
        guest: b.guest?._id || '',
        room: b.room?._id || '',
        checkInDate: b.checkInDate?.substring(0, 10) || '',
        checkOutDate: b.checkOutDate?.substring(0, 10) || '',
        totalAmount: b.totalAmount || '',
        paymentStatus: b.paymentStatus || '',
        status: b.status || '',
        additionalServices: (b.additionalServices || []).map(s => s.serviceName).join(', '),
        invoiceGenerated: b.invoiceGenerated || false,
        createdBy: b.createdBy?._id || b.createdBy || ''
      });
    } catch (err) {
      console.error('Failed to fetch booking:', err);
      alert('Error fetching booking data');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBooking(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBooking = {
        ...booking,
        additionalServices: booking.additionalServices
          .split(',')
          .map(service => ({
            serviceName: service.trim(),
            price: 0 // Set or fetch actual price as needed
          }))
      };

      await axios.put(`http://localhost:3001/hms/bookings/${id}`, updatedBooking);
      alert('Booking updated successfully');
      navigate('/bookings');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update booking');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Booking</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Guest ID</label>
          <input type="text" name="guest" className="form-control" value={booking.guest} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Room ID</label>
          <input type="text" name="room" className="form-control" value={booking.room} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Check-In Date</label>
          <input type="date" name="checkInDate" className="form-control" value={booking.checkInDate} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Check-Out Date</label>
          <input type="date" name="checkOutDate" className="form-control" value={booking.checkOutDate} onChange={handleChange} required />
        </div>

        <div className="col-md-4">
          <label className="form-label">Total Amount</label>
          <input type="number" name="totalAmount" className="form-control" value={booking.totalAmount} onChange={handleChange} required />
        </div>

        <div className="col-md-4">
          <label className="form-label">Payment Status</label>
          <select name="paymentStatus" className="form-select" value={booking.paymentStatus} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Booking Status</label>
          <select name="status" className="form-select" value={booking.status} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="reserved">Reserved</option>
            <option value="checked-in">Checked-In</option>
            <option value="checked-out">Checked-Out</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Additional Services (comma separated)</label>
          <input type="text" name="additionalServices" className="form-control" value={booking.additionalServices} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Invoice Generated</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="invoiceGenerated"
              checked={booking.invoiceGenerated}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Yes
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">Created By (User ID)</label>
          <input type="text" name="createdBy" className="form-control" value={booking.createdBy} onChange={handleChange} readOnly />
        </div>

        <div className="col-12 d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Update Booking</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/bookings')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
