import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    roomNumber: '',
    name: '',
    type: '',
    floor: '',
    isSmokingAllowed: false,
    pricePerNight: '',
    status: '',
    description: '',
    features: '',
    images: ''
  });

  useEffect(() => {
    fetchRoomDetails();
  }, []);

  const fetchRoomDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/hms/rooms/${id}`);
      const r = res.data.room;
      setRoom({
        roomNumber: r.roomNumber,
        name: r.name,
        type: r.type,
        floor: r.floor,
        isSmokingAllowed: r.isSmokingAllowed,
        pricePerNight: r.pricePerNight,
        status: r.status,
        description: r.description || '',
        features: (r.features || []).join(', '),
        images: (r.images || []).join(', ')
      });
    } catch (error) {
      console.error('Failed to load room:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoom(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRoom = {
        ...room,
        features: room.features.split(',').map(f => f.trim()),
        images: room.images.split(',').map(i => i.trim())
      };

      await axios.put(`http://localhost:3001/hms/rooms/${id}`, updatedRoom);
      alert('Room updated successfully');
      navigate('/rooms');
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update room');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Room</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Room Number</label>
          <input type="text" name="roomNumber" className="form-control" value={room.roomNumber} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={room.name} onChange={handleChange} required />
        </div>

        <div className="col-md-4">
          <label className="form-label">Type</label>
          <select name="type" className="form-select" value={room.type} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <option value="deluxe">Deluxe</option>
            <option value="executive">Executive</option>
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label">Floor</label>
          <input type="number" name="floor" className="form-control" value={room.floor} onChange={handleChange} required />
        </div>

        <div className="col-md-3">
          <label className="form-label">Price/Night</label>
          <input type="number" name="pricePerNight" className="form-control" value={room.pricePerNight} onChange={handleChange} required />
        </div>

        <div className="col-md-3">
          <label className="form-label">Status</label>
          <select name="status" className="form-select" value={room.status} onChange={handleChange} required>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
            <option value="cleaning">Cleaning</option>
          </select>
        </div>

        <div className="col-md-3">
          <div className="form-check mt-4 pt-2">
            <input type="checkbox" name="isSmokingAllowed" className="form-check-input" checked={room.isSmokingAllowed} onChange={handleChange} />
            <label className="form-check-label">Smoking Allowed</label>
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={room.description} onChange={handleChange}></textarea>
        </div>

        <div className="col-md-6">
          <label className="form-label">Features (comma separated)</label>
          <input type="text" name="features" className="form-control" value={room.features} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Images URLs (comma separated)</label>
          <input type="text" name="images" className="form-control" value={room.images} onChange={handleChange} />
        </div>

        
        <div className="col-12 d-flex justify-content-between">
  <button type="submit" className="btn btn-primary">Update Room</button>
  <button type="button" className="btn btn-secondary" onClick={() => navigate('/rooms')}>Cancel</button>
</div>

      </form>
    </div>
  );
}
