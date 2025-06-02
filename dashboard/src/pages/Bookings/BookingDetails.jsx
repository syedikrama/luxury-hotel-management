import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // assuming react-router is used for params

export default function BookingDetails() {
  const { id } = useParams(); // booking id from URL param
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooking() {
      try {
        setLoading(true);
        const res = await fetch(`/api/bookings/${id}`);
        if (!res.ok) throw new Error("Failed to fetch booking data");
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

  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!booking) return <p>No booking found</p>;

  return (
    <div style={{
      maxWidth: 600,
      margin: "30px auto",
      padding: 25,
      border: "1px solid #ddd",
      borderRadius: 10,
      boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Booking Details
      </h2>

      <p><strong>Booking ID:</strong> {booking._id}</p>
      <p>
        <strong>Guest:</strong>{" "}
        {booking.guest ? booking.guest.name || booking.guest._id : "N/A"}
      </p>
      <p>
        <strong>Room:</strong>{" "}
        {booking.room ? booking.room.roomNumber || booking.room._id : "N/A"}
      </p>
      <p>
        <strong>Check-in Date:</strong>{" "}
        {new Date(booking.checkInDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Check-out Date:</strong>{" "}
        {new Date(booking.checkOutDate).toLocaleDateString()}
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
    </div>
  );
}
