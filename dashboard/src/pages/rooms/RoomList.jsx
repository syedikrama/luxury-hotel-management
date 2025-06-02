import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await axios.get('http://localhost:3001/hms/rooms');
      setRooms(res.data.rooms);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this room?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3001/hms/rooms/${id}`);
      // remove deleted room from state
      setRooms(rooms.filter(room => room._id !== id));
    } catch (error) {
      console.error('Error deleting room:', error);
      alert("Failed to delete room");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Room List</h2>
      <Link to="/rooms/add" className="btn btn-success mb-3">Add Room</Link>
                  <Link to="/dashboard" className="btn btn-warning mb-3 mx-3">Go to Dashboard</Link>
      
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Room #</th>
              <th>Name</th>
              <th>Type</th>
              <th>Floor</th>
              <th>Status</th>
              <th>Smoking</th>
              <th>Price/Night</th>
              <th>Description</th>
              <th>Features</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id}>
                <td>{room.roomNumber}</td>
                <td>{room.name}</td>
                <td>{room.type}</td>
                <td>{room.floor}</td>
                <td>{room.status}</td>
                <td>{room.isSmokingAllowed ? 'Yes' : 'No'}</td>
                <td>Rs. {room.pricePerNight}</td>
                <td>{room.description || '-'}</td>
                <td>
                  {room.features && room.features.length > 0
                    ? room.features.join(', ')
                    : '-'}
                </td>
                <td>
                  {room.images && room.images.length > 0 ? (
                    <img
                      src={room.images[0]}
                      alt="Room"
                      width="60"
                      height="40"
                      style={{ objectFit: 'cover', borderRadius: '5px' }}
                    />
                  ) : (
                    '-'
                  )}
                </td>
                <td>
                  <Link to={`/rooms/edit/${room._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button
                    onClick={() => handleDelete(room._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
