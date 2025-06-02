import React, { useEffect, useState } from 'react';

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch('http://localhost:3001/hms/bookings')
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(data => {
      console.log("Backend response:", data);
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
    alert(`Edit booking with id: ${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await fetch(`http://localhost:3001/hms/bookings/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete booking');

      // Delete ho jaane ke baad UI update karen
      setBookings(bookings.filter(booking => booking._id !== id));
    } catch (err) {
      alert('Error deleting booking: ' + err.message);
    }
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Loading bookings...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Booking List</h2>
      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555' }}>No bookings available.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <thead style={{ backgroundColor: '#2980b9', color: '#fff' }}>
            <tr>
              <th style={{ padding: '12px' }}>Guest Name</th>
              <th style={{ padding: '12px' }}>Room</th>
              <th style={{ padding: '12px' }}>Check-in</th>
              <th style={{ padding: '12px' }}>Check-out</th>
              <th style={{ padding: '12px' }}>Amount ($)</th>
              <th style={{ padding: '12px' }}>Status</th>
              <th style={{ padding: '12px' }}>Payment</th>
              <th style={{ padding: '12px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(({ _id, guest, room, checkInDate, checkOutDate, totalAmount, status, paymentStatus }) => (
              <tr key={_id} style={{ borderBottom: '1px solid #ddd', textAlign: 'center' }}>
                <td style={{ padding: '10px' }}>{guest?.name || 'N/A'}</td>
                <td style={{ padding: '10px' }}>{room?.roomNumber || 'N/A'}</td>
                <td style={{ padding: '10px' }}>{new Date(checkInDate).toLocaleDateString()}</td>
                <td style={{ padding: '10px' }}>{new Date(checkOutDate).toLocaleDateString()}</td>
                <td style={{ padding: '10px' }}>{totalAmount}</td>
                <td style={{ padding: '10px', textTransform: 'capitalize' }}>{status}</td>
                <td style={{ padding: '10px', textTransform: 'capitalize' }}>{paymentStatus}</td>
                <td style={{ padding: '10px' }}>
                  <button
                    onClick={() => handleEdit(_id)}
                    style={{
                      marginRight: 8,
                      backgroundColor: '#27ae60',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: 4,
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(_id)}
                    style={{
                      backgroundColor: '#e74c3c',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: 4,
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
