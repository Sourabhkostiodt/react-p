//sidebsr.jsx write side bar code here using telwend css

import React from 'react';
import { Link } from 'react-router-dom';
// import './sidebar.css'; // Import the sidebar CSS file
import logob from '/src/Logo_black.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
   <>
      <div className="sidebar-header">
       
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile" className="sidebar-link ">
          <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" className="sidebar-link">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/logout" className="sidebar-link">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
      </>
  );
};

export default Sidebar;
