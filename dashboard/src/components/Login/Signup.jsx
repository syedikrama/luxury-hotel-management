import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:3001/hms/register', {
        name,
        email,
        password,
        role,
      });

      setMessage('Signup successful! You can now log in.');
      // Optionally navigate to login page after signup
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      if (error.response?.status === 409) {
        setMessage('Email already exists. Please use a different email.');
      } else {
        setMessage(error.response?.data?.message || 'Signup failed');
      }
      console.error('Signup Failed:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup}>Signup</button>
      <p>{message}</p>
    </div>
  );
}
