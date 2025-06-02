import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Added for redirect
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  let [msgDropdown, setMsgDropdown] = useState(false);
  let [notifDropdown, setNotifDropdown] = useState(false);
  let [userDropdown, setUserDropdown] = useState(false);

  let [userName, setUserName] = useState('');     // ✅ Added state
  let [userRole, setUserRole] = useState('');     // ✅ Added state
  let navigate = useNavigate();                   // ✅ Initialize navigate

  useEffect(() => {
    let name = localStorage.getItem('name');
    let role = localStorage.getItem('role');
    if (name) setUserName(name);
    if (role) setUserRole(role);
  }, []);

  let handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    navigate('/signin');
  };

  return (
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
      <a href="#" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
      </a>

      <a href="#" className="sidebar-toggler flex-shrink-0">
        <i className="fa fa-bars"></i>
      </a>

      <form className="d-none d-md-flex ms-4">
        <input className="form-control border-0" type="search" placeholder="Search" />
      </form>

      <div className="navbar-nav align-items-center ms-auto">
        {/* Message Dropdown */}
        <div className="nav-item dropdown position-relative">
          <button className="nav-link btn d-flex align-items-center" onClick={() => setMsgDropdown(!msgDropdown)}>
            <i className="fa fa-envelope me-lg-2"></i>
            <span className="d-none d-lg-inline-flex">Message</span>
            <i className="fa fa-caret-down ms-1"></i>
          </button>
          {msgDropdown && (
            <div className="dropdown-menu show position-absolute end-0 mt-2 bg-light border-0 rounded-0 rounded-bottom">
              <a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">John sent you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item text-center">See all messages</a>
            </div>
          )}
        </div>

        {/* Notification Dropdown */}
        <div className="nav-item dropdown position-relative ms-3">
          <button className="nav-link btn d-flex align-items-center" onClick={() => setNotifDropdown(!notifDropdown)}>
            <i className="fa fa-bell me-lg-2"></i>
            <span className="d-none d-lg-inline-flex">Notification</span>
            <i className="fa fa-caret-down ms-1"></i>
          </button>
          {notifDropdown && (
            <div className="dropdown-menu show position-absolute end-0 mt-2 bg-light border-0 rounded-0 rounded-bottom">
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item text-center">See all notifications</a>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="nav-item dropdown position-relative ms-3">
          <button className="nav-link btn d-flex align-items-center" onClick={() => setUserDropdown(!userDropdown)}>
            <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
            <span className="d-none d-lg-inline-flex">{userName} (<em>{userRole}</em>)</span>
            <i className="fa fa-caret-down ms-1"></i>
          </button>
          {userDropdown && (
            <div className="dropdown-menu show position-absolute end-0 mt-2 bg-light border-0 rounded-0 rounded-bottom">
              <a href="#" className="dropdown-item">My Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="#" className="dropdown-item" onClick={handleLogout}>Log Out</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
