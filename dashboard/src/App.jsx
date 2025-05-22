import './App.css';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
import Dashboard from './Dashboard'; // Assuming this is the manager dashboard
import ProtectedRoute from './route/protectedroute';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />

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
