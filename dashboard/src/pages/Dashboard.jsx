import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { WorldwideSalesChart, SalesRevenueChart } from '../components/Chart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { left } from '@popperjs/core';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await axios.get('http://localhost:3001/hms/rooms');
      setRooms(res.data.rooms);
    } catch (err) {
      console.error('Error fetching rooms:', err);
    }
  };

  // Calculate room stats
  const totalRooms = rooms.length;
  const available = rooms.filter(r => r.status === 'available').length;
  const occupied = rooms.filter(r => r.status === 'occupied').length;
  const maintenance = rooms.filter(r => r.status === 'maintenance').length;

  return (
    <div className="container d-flex min-vh-100 p-2" style={{ overflowX: 'hidden',marginLeft: "200px" }}>
      <Sidebar />

      <div className="d-flex flex-column flex-grow-1 mx-5">
        <Navbar />

        {/* Sale & Revenue Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {[
              { icon: 'fa-chart-line', title: 'Today Sale' },
              { icon: 'fa-chart-bar', title: 'Total Sale' },
              { icon: 'fa-chart-area', title: 'Today Revenue' },
              { icon: 'fa-chart-pie', title: 'Total Revenue' }
            ].map((item, idx) => (
              <div className="col-sm-6 col-xl-3" key={idx}>
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className={`fa ${item.icon} fa-3x text-primary`}></i>
                  <div className="ms-3">
                    <p className="mb-2">{item.title}</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sale & Revenue End */}

        {/* Room Summary Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-info text-white rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-bed fa-3x"></i>
                <div className="ms-3">
                  <p className="mb-2">Total Rooms</p>
                  <h6 className="mb-0">{totalRooms}</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-success text-white rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-door-open fa-3x"></i>
                <div className="ms-3">
                  <p className="mb-2">Available</p>
                  <h6 className="mb-0">{available}</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-danger text-white rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-user-check fa-3x"></i>
                <div className="ms-3">
                  <p className="mb-2">Occupied</p>
                  <h6 className="mb-0">{occupied}</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-warning text-white rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-tools fa-3x"></i>
                <div className="ms-3">
                  <p className="mb-2">Maintenance</p>
                  <h6 className="mb-0">{maintenance}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Room Summary End */}

        {/* Sales Chart Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light text-center rounded p-4" style={{ height: '350px' }}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Worldwide Sales</h6>
                  <a href="">Show All</a>
                </div>
                <WorldwideSalesChart />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light text-center rounded p-4" style={{ height: '350px' }}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Sales & Revenue</h6>
                  <a href="">Show All</a>
                </div>
                <SalesRevenueChart />
              </div>
            </div>
          </div>
        </div>
        {/* Sales Chart End */}

        {/* Recent Sales Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Recent Sales</h6>
              <a href="">Show All</a>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-dark">
                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((_, idx) => (
                    <tr key={idx}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Recent Sales End */}

        {/* Widgets Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {/* Messages */}
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="mb-0">Messages</h6>
                  <a href="">Show All</a>
                </div>
                {[1, 2, 3, 4].map((_, idx) => (
                  <div className={`d-flex align-items-center ${idx < 3 ? 'border-bottom' : ''} py-3`} key={idx}>
                    <img
                      className="rounded-circle flex-shrink-0"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: '40px', height: '40px' }}
                    />
                    <div className="w-100 ms-3">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <small>15 minutes ago</small>
                      </div>
                      <span>Short message goes here...</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Calendar</h6>
                  <a href="">Show All</a>
                </div>
                <Calendar onChange={setDate} value={date} />
              </div>
            </div>

            {/* To Do List */}
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">To Do List</h6>
                  <a href="">Show All</a>
                </div>
                <div className="d-flex mb-2">
                  <input className="form-control bg-transparent" type="text" placeholder="Enter task" />
                  <button type="button" className="btn btn-primary ms-2">Add</button>
                </div>
                {[1, 2, 3, 4, 5].map((_, idx) => (
                  <div className={`d-flex align-items-center border-bottom py-2`} key={idx}>
                    <input className="form-check-input m-0" type="checkbox" />
                    <p className="mb-0 ms-2">Sample task {idx + 1}</p>
                    <button className="btn btn-sm btn-danger ms-auto"><i className="fa fa-times"></i></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Widgets End */}

        <Footer />
      </div>
    </div>
  );
}
