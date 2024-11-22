import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/science">Science</Link></li>
        <li><Link to="/conservation">Conservation</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;