import React, { useEffect, useState } from 'react';

export default function Sidebar() {
  let [elementsOpen, setElementsOpen] = useState(false);
  let [pagesOpen, setPagesOpen] = useState(false);

     let [userName, setUserName] = useState('');
     let [userRole, setUserRole] = useState('');

  useEffect(() => {
    let name = localStorage.getItem('name');
    let role = localStorage.getItem('role');
    if (name) {
      setUserName(name);
      if (role) setUserRole(role);
    }
  }, []);


  // Function to toggle dropdowns
  let toggleDropdown = (dropdown) => {
    if (dropdown === 'elements') {
      setElementsOpen(!elementsOpen);
      setPagesOpen(false);  // close other dropdown if open
    } else if (dropdown === 'pages') {
      setPagesOpen(!pagesOpen);
      setElementsOpen(false);
    }
  };

  return (
    <div
      className="sidebar pe-4 pb-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <nav className="navbar bg-light navbar-light flex-column align-items-start">
        {/* Brand */}
        <a href="/" className="navbar-brand mx-4 mb-3 w-100">
          <h3 className="text-primary">
            <i className="fa fa-hashtag me-2"></i>DASHMIN
          </h3>
        </a>

        {/* User Profile */}
        <div className="d-flex align-items-center ms-4 mb-4 w-100">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src="/img/user.jpg"
              alt="User"
              style={{ width: '40px', height: '40px' }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div className="ms-3">
            <h6 className="mb-0"> Welcome, <strong>{userName}</strong></h6>
            <span><em>{userRole}</em></span>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="navbar-nav w-100 flex-column">
          <a href="/" className="nav-item nav-link active">
            <i className="fa fa-tachometer-alt me-2"></i>Dashboard
          </a>

          {/* Elements Dropdown */}
          <div className="nav-item dropdown w-100">
            <a
              href="#"
              className={`nav-link dropdown-toggle ${elementsOpen ? 'show' : ''}`}
              role="button"
              id="elementsDropdown"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('elements');
              }}
              aria-expanded={elementsOpen ? 'true' : 'false'}
            >
              <i className="fa fa-laptop me-2"></i>Elements
            </a>
            <ul
              className={`dropdown-menu bg-transparent border-0 w-100 ${elementsOpen ? 'show' : ''}`}
              aria-labelledby="elementsDropdown"
            >
              <li>
                <a href="/button" className="dropdown-item">
                  Buttons
                </a>
              </li>
              <li>
                <a href="/typography" className="dropdown-item">
                  Typography
                </a>
              </li>
              <li>
                <a href="/element" className="dropdown-item">
                  Other Elements
                </a>
              </li>
            </ul>
          </div>

          <a href="/rooms" className="nav-item nav-link">
            <i className="fa fa-th me-2"></i>Rooms
          </a>
          <a href="/form" className="nav-item nav-link">
            <i className="fa fa-keyboard me-2"></i>Forms
          </a>
          <a href="/table" className="nav-item nav-link">
            <i className="fa fa-table me-2"></i>Tables
          </a>
          <a href="/chart" className="nav-item nav-link">
            <i className="fa fa-chart-bar me-2"></i>Charts
          </a>

          {/* Pages Dropdown */}
          <div className="nav-item dropdown w-100">
            <a
              href="#"
              className={`nav-link dropdown-toggle ${pagesOpen ? 'show' : ''}`}
              role="button"
              id="pagesDropdown"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('pages');
              }}
              aria-expanded={pagesOpen ? 'true' : 'false'}
            >
              <i className="far fa-file-alt me-2"></i>Pages
            </a>
            <ul
              className={`dropdown-menu bg-transparent border-0 w-100 ${pagesOpen ? 'show' : ''}`}
              aria-labelledby="pagesDropdown"
            >
              <li>
                <a href="/signin" className="dropdown-item">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/signup" className="dropdown-item">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/404" className="dropdown-item">
                  404 Error
                </a>
              </li>
              <li>
                <a href="/blank" className="dropdown-item">
                  Blank Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
