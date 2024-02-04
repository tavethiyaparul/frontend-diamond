import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"

const Header = () => {
    return (
      <>
     <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 ">
            <div className="info-block">
              <i className="fa fa-phone"></i>+91 9978227111
            </div>
          </div>
          <div className="col-md-6 text-right">
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Your Company
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-link">
              <i className="fa fa-sign-in"></i>
              </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Header;