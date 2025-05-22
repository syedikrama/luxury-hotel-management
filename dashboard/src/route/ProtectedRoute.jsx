// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
