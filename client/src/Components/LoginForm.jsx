import React, { useState } from 'react';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const [isRegistering, setIsRegistering] = useState(false);

    const handleToggle = () => {
        setIsRegistering(prev => !prev);
    };

    return (
        <div className="hero-section">
            <div className="overlay" style={{ position: 'relative', zIndex: 1 }}>

                <nav className="navbar navbar-expand-lg navbar-dark py-4">
                    <div className="container-fluid d-flex align-items-center justify-content-between px-5">
                        <span className="navbar-brand fs-3 fw-bold me-5" style={{ marginLeft: "120px" }}>
                            Hideaway Resort
                        </span>
                        <ul className="navbar-nav flex-row gap-4 mx-auto">
                            <li className="nav-item"><Link className="nav-link text-white fs-5" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white fs-5" to="/Room">Room</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white fs-5" to="/About">About</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white fs-5" to="/News">News</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white fs-5" to="/Contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white fs-5" to="/Offers">Offers</Link></li>
                        </ul>
                        <div className="d-flex align-items-center gap-2 ms-5">
                            <div className="social-icons d-flex gap-4" style={{ marginRight: "10px" }}>
                                <i className="fab fa-facebook-f text-white fs-5"></i>
                                <i className="fab fa-twitter text-white fs-5"></i>
                                <i className="fab fa-google-plus-g text-white fs-5"></i>
                            </div>
                            <Link to="/Login" className="book-btn" style={{ marginRight: "65px" }}>Login</Link>
                        </div>
                    </div>
                </nav>

                {/* Heading Text */}
                <div className="hero-content text-center">
                    <h1 className="display-4" style={{ fontSize: "30px" , marginRight :"500px" }}>
                        Live <em> Wonderful</em> life
                    </h1>
                    <p className="lead" style={{ fontSize: "80px" ,  marginRight :"500px"  }}>
                        {isRegistering ? "Register" : "Login"}
                    </p>
                </div>


                {/* Form */}
                <div className={`form-wrapper d-flex justify-content-center align-items-center ${isRegistering ? 'slide-right' : 'slide-left'}`}>
                    <div className="p-5 shadow-lg login-form-container">
                        <h2 className="text-center mb-4">
                            {isRegistering ? "Create Account" : "Welcome Back"}
                        </h2>

                        <form>
                            <div className="mb-4 position-relative">
                                <label htmlFor="email" className="form-label text-white">Email Address</label>
                                <input type="email" className="form-control bg-transparent text-white border-white pe-5" placeholder="Enter your email" />
                                <i className="fas fa-envelope position-absolute text-white icon-position"></i>
                            </div>

                            <div className="mb-4 position-relative">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input type="password" className="form-control bg-transparent text-white border-white pe-5" placeholder="Enter your password" />
                                <i className="fas fa-lock position-absolute text-white icon-position"></i>
                            </div>

                            {isRegistering && (
                                <div className="mb-4 position-relative">
                                    <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                                    <input type="password" className="form-control bg-transparent text-white border-white pe-5" placeholder="Confirm your password" />
                                    <i className="fas fa-lock position-absolute text-white icon-position"></i>
                                </div>
                            )}

                            {!isRegistering && (
                                <div className="d-flex justify-content-between mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="remember" />
                                        <label className="form-check-label text-white" htmlFor="remember">Remember me</label>
                                    </div>
                                    <a href="#" className="text-warning text-decoration-underline">Forgot password?</a>
                                </div>
                            )}

                            <button type="submit" className="btn btn-warning w-100 rounded-pill fw-bold shadow-sm">
                                {isRegistering ? "Register" : "Login"}
                            </button>

                            <p className="text-center mt-4 text-white">
                                {isRegistering ? "Already have an account?" : "Don't have an account?"}
                                <button type="button" className="btn btn-link text-warning fw-bold" onClick={handleToggle}>
                                    {isRegistering ? "Login" : "Register"}
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
