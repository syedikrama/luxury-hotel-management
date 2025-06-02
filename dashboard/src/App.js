import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Table from './pages/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProtectedRoute from './auth/ProtectedRoute';
import { useEffect } from 'react';
import RoomList from './pages/rooms/RoomList';
import AddRooms from './pages/rooms/AddRooms';
import EditRoom from './pages/rooms/EditRoom';
import BookingForm from './pages/Bookings/BookingForm';
import BookingList from './pages/Bookings/BookingList';
import EditBooking from './pages/Bookings/EditBooking';

function App() {
  let HomeRedirect = () => {
    let navigate = useNavigate();
    console.log("object")
    useEffect(() => {
      let tokenName = localStorage.getItem('name');
      let token = localStorage.getItem('token');
      if (token != null && tokenName != null) {
        navigate('/dashboard');
      } else {
        navigate('/Signin');
      }
    }, [navigate]);

    return null;
  };




  return (

    <BrowserRouter>
      <div className='app'>

        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          {/* Protected Routes */}
          <Route path="/dashboard/*" element={<ProtectedRoute allowedRole="manager"><Dashboard /></ProtectedRoute>} />
          <Route path="/form" element={<ProtectedRoute><Form /></ProtectedRoute>} />
          <Route path="/table" element={<ProtectedRoute><Table /></ProtectedRoute>} />
          
            <Route path="/rooms" element={<RoomList />} />
            <Route path="/rooms/add" element={<AddRooms />} />
            <Route path="/rooms/edit/:id" element={<EditRoom />} />
            <Route path="/bookings/add" element={<BookingForm />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/bookings/edit/:id" element={<EditBooking />} />




          


          {/* Public Routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
