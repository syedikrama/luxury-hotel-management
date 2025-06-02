import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddRooms() {
  const [roomData, setRoomData] = useState({
    roomNumber: '',
    name: '',
    type: 'single',
    floor: '',
    isSmokingAllowed: false,
    pricePerNight: '',
    description: '',
    features: '',
    images: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === 'checkbox' ? checked : value;
    setRoomData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert comma-separated features and images to arrays
      const payload = {
        ...roomData,
        features: roomData.features.split(',').map(f => f.trim()),
        images: roomData.images.split(',').map(i => i.trim()),
      };

      let res = await axios.post('http://localhost:3001/hms/rooms', payload);
      setMessage('Room added successfully!');
      navigate('/rooms'); // redirect to room list
    } catch (error) {
      console.error('Error adding room:', error);
      setMessage('Error adding room. Check console.');
    }
  };

  return (
    <div className="container mt-5">
      
      <h2>Add New Room</h2>
            <Link to="/rooms" className="btn btn-success mb-3">Rooms</Link>
            <Link to="/dashboard" className="btn btn-warning mb-3 mx-3">Go to Dashboard</Link>

      <form onSubmit={handleSubmit}>
        <div className=" mb-3">
          <label>Room Number</label>
          <input type="text" className="form-control" name="roomNumber" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Room Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select className="form-control" name="type" onChange={handleChange}>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
            <option value="deluxe">Deluxe</option>
            <option value="executive">Executive</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Floor</label>
          <input type="number" className="form-control" name="floor" onChange={handleChange} required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" name="isSmokingAllowed" onChange={handleChange} />
          <label className="form-check-label">Smoking Allowed</label>
        </div>
        <div className="mb-3">
          <label>Price per Night</label>
          <input type="number" className="form-control" name="pricePerNight" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label>Features (comma-separated)</label>
          <input type="text" className="form-control" name="features" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Image URLs (comma-separated)</label>
          <input type="text" className="form-control" name="images" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Room</button>
        <p className="mt-3 text-success">{message}</p>
      </form>
    </div>
  );
}
