import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookingDetails() {
  const { id } = useParams(); // booking id from URL param
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooking() {
      try {
        setLoading(true);
        const res = await fetch(`/hms/bookings/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch booking data: ${res.statusText}`);
        const data = await res.json();
        setBooking(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBooking();
  }, [id]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString("en-GB", options); // Format as dd-mm-yyyy
  };

  const handleEdit = () => {
    navigate(`/bookings/edit/${id}`);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        const res = await fetch(`/hms/bookings/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete booking");
        navigate("/bookings");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="spinner"></div> {/* Assuming you have a spinner */}
      <p>Loading booking details...</p>
    </div>
  );
  if (error) return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;
  if (!booking) return <p>No booking found</p>;

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
        padding: 25,
        border: "1px solid #ddd",
        borderRadius: 10,
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Booking Details</h2>

      <p><strong>Booking ID:</strong> {booking._id}</p>
      <p>
        <strong>Guest:</strong> {booking.guest ? booking.guest.name || booking.guest._id : "N/A"}
      </p>
      <p>
        <strong>Room:</strong> {booking.room ? booking.room.roomNumber || booking.room._id : "N/A"}
      </p>
      <p>
        <strong>Check-in Date:</strong> {formatDate(booking.checkInDate)}
      </p>
      <p>
        <strong>Check-out Date:</strong> {formatDate(booking.checkOutDate)}
      </p>
      <p>
        <strong>Total Amount:</strong> ${booking.totalAmount}
      </p>
      <p>
        <strong>Payment Status:</strong> {booking.paymentStatus}
      </p>
      <p>
        <strong>Booking Status:</strong> {booking.status}
      </p>

      <div>
        <strong>Additional Services:</strong>
        {booking.additionalServices && booking.additionalServices.length > 0 ? (
          <ul>
            {booking.additionalServices.map((service, i) => (
              <li key={i}>
                {service.serviceName} - ${service.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No additional services</p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleEdit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2980b9",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Edit Booking
        </button>

        <button
          onClick={handleDelete}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Delete Booking
        </button>
      </div>
    </div>
  );
}
