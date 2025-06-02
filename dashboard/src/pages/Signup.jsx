import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // React Router ka hook

export default function Signup() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [role, setRole] = useState('');
  let [message, setMessage] = useState('');

  let navigate = useNavigate();

  let handleSignup = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post('http://localhost:3001/hms/register', {
        name,
        email,
        password,
        role,
      });

      setMessage('Signup successful! You can now log in.');

      // 2 seconds ke baad login page pe redirect
      setTimeout(() => navigate('/Signin'), 2000);

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
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <form onSubmit={handleSignup} className="bg-light rounded p-4 p-sm-5 my-4 mx-3">

              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                <h3>Sign Up</h3>
              </div>

              {message && <div className="alert alert-info">{message}</div>}

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="floatingName">Username</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingRole"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                  <option value="receptionist">Receptionist</option>
                  <option value="housekeeping">Housekeeping</option>

                </select>
                <label htmlFor="floatingRole">Role</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
              <p className="text-center mb-0">
                Already have an Account? <a href="/Signin">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
