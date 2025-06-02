import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signin() {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [agreeTerms, setAgreeTerms] = useState(false); // Checkbox state
  let [message, setMessage] = useState('')
  let navigate = useNavigate();

  useEffect(() => {
    let tokenIdd = localStorage.getItem('name');
    let tokenName = localStorage.getItem('token');
    if (tokenIdd != null && tokenName != null) {
      navigate('/dashboard');
    }
  }, [navigate]);

  let Login = async (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      setMessage("Please check 'Check me out' to proceed.");
      return;
    }

    try {
      let res = await axios.post('http://localhost:3001/hms/login', {
        email,
        password,
      });

      setMessage(`Login Success! Role: ${res.data.user.role}`);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);
      localStorage.setItem('name', res.data.user.name);

      navigate('/dashboard');

    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
      console.error('Login Failed:', error);
    }
  };

  return (
    <div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <div className="container-fluid">
          <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <form className="bg-light rounded p-4 p-sm-5 my-4 mx-3" onSubmit={Login}>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="index.html" className="">
                    <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                  </a>
                  <h3>Sign In</h3>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="floatingInput">Email address</label>
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
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      required
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <a href="">Forgot Password</a>
                </div>
                <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                {message && <p className="text-danger">{message}</p>}
                <p className="text-center mb-0">Don't have an Account? <a href="/Signup">Sign Up</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
