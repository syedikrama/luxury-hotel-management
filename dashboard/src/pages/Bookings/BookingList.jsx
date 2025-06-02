import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/hms/bookings')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        if (data.bookings && Array.isArray(data.bookings)) {
          setBookings(data.bookings);
        } else if (Array.isArray(data)) {
          setBookings(data);
        } else {
          setBookings([]);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/bookings/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await fetch(`http://localhost:3001/hms/bookings/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete booking');

      setBookings(bookings.filter(booking => booking._id !== id));
    } catch (err) {
      alert('Error deleting booking: ' + err.message);
    }
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Loading bookings...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: 1200, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Booking List</h2>
      <Link to="/dashboard" className="btn btn-warning mb-3 mx-3">Go to Dashboard</Link>
      <Link to="/bookings/add" className="btn btn-success mb-3">Add New Booking</Link>

      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555' }}>No bookings available.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <thead style={{ backgroundColor: '#2980b9', color: '#fff' }}>
              <tr>
                <th style={thStyle}>Guest Name</th>
                <th style={thStyle}>Room</th>
                <th style={thStyle}>Check-in</th>
                <th style={thStyle}>Check-out</th>
                <th style={thStyle}>Amount ($)</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Payment</th>
                <th style={thStyle}>Services</th>
                <th style={thStyle}>Invoice</th>
                <th style={thStyle}>Created By</th>
                <th style={thStyle}>Created At</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking._id} style={{ borderBottom: '1px solid #ddd', textAlign: 'center' }}>
                  <td style={tdStyle}>{booking.guest?.email || 'N/A'}</td>
                  <td style={tdStyle}>{booking.room?.roomNumber || 'N/A'}</td>
                  <td style={tdStyle}>{new Date(booking.checkInDate).toLocaleDateString()}</td>
                  <td style={tdStyle}>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                  <td style={tdStyle}>{booking.totalAmount}</td>
                  <td style={tdStyle}>{booking.status}</td>
                  <td style={tdStyle}>{booking.paymentStatus}</td>
                  <td style={tdStyle}>
                    {(booking.additionalServices || []).length > 0
                      ? booking.additionalServices.map(s => `${s.serviceName} ($${s.price})`).join(', ')
                      : 'None'}
                  </td>
                  <td style={tdStyle}>{booking.invoiceGenerated ? 'Yes' : 'No'}</td>
                  <td style={tdStyle}>{booking.createdBy?.name || booking.createdBy?._id || 'N/A'}</td>
                  <td style={tdStyle}>{new Date(booking.createdAt).toLocaleDateString()}</td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => handleEdit(booking._id)}
                      style={editBtnStyle}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      style={deleteBtnStyle}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const thStyle = {
  padding: '12px',
  whiteSpace: 'nowrap'
};

const tdStyle = {
  padding: '10px',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap'
};

const editBtnStyle = {
  marginRight: 8,
  backgroundColor: '#27ae60',
  color: '#fff',
  border: 'none',
  padding: '6px 12px',
  borderRadius: 4,
  cursor: 'pointer',
};

const deleteBtnStyle = {
  backgroundColor: '#e74c3c',
  color: '#fff',
  border: 'none',
  padding: '6px 12px',
  borderRadius: 4,
  cursor: 'pointer',
};
