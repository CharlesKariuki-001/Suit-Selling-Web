import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <i className="fas fa-suitcase-rolling"></i> Suit Store
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <i className="fas fa-info-circle"></i> About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <i className="fas fa-address-book"></i> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;