import React from 'react'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Link } from 'react-router-dom';  

export default function RoomNavbar() {
  return (
 <div className="hero-section" style={{height :"500px"}} >
      <div className="overlay">
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container-fluid d-flex align-items-center justify-content-between px-5">

            {/* Logo */}
            <span className="navbar-brand fs-3 fw-bold me-5" style={{ marginLeft: "120px" }}>Hideaway Resort</span>

            {/* Navigation Links */}
            <ul className="navbar-nav flex-row gap-4 mx-auto">
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/">Home</Link> 
              </li>
                <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/Room">Room</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/About">About</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/Facilities">Facilities</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/Contact">Contact</Link> 
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/Offers">Offers</Link> 
              </li>
            </ul>

            {/* Social Icons and Button */}
            <div className="d-flex align-items-center gap-2 ms-5">
              <div className="social-icons-home d-flex gap-4"  style={{marginRight :"10px"}}>
                <i className="fab fa-facebook-f text-white fs-5"></i>
                <i className="fab fa-twitter text-white fs-5"></i>
                <i className="fab fa-google-plus-g text-white fs-5"></i>
              </div>
              <Link to="/Login" className="book-btn" style={{ marginRight: "65px" }}>Login</Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content text-center" >
          <p className="lead" style={{ fontSize: "80px" }}>ROOMS</p>
          <h1 className="display-4" style={{ fontSize: "18px" }}>Home <em> \ </em> Our Rooms</h1>

        </div>
      </div>
    </div>
  )
}
