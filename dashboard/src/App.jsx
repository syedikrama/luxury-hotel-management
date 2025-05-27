import './App.css';
import React, { useEffect } from 'react';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
import Dashboard from './Dashboard'; // Assuming this is the manager dashboard
import ProtectedRoute from './route/protectedroute';
import { BrowserRouter, NavigationType, Route, Routes, useNavigate } from 'react-router-dom';
import Rooms from './Rooms/Rooms';

function App() {

  const HomeRedirect = () => {
    const navigate = useNavigate();
    console.log("object")
    useEffect(() => {
      const tokenName = localStorage.getItem('name');
      const token = localStorage.getItem('token');
      if (token != null && tokenName != null) {
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    }, [navigate]);

    return null;
  };
  return (

    <div className='app'>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/rooms" element={<Rooms />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute allowedRole="manager">
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
