import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "../index.css"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">
                                info@company.com
                            </a>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">
                                010-020-0340
                            </a>
                        </div>
                        <div>
                            <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored">
                                <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                            </a>
                            <a className="text-light" href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
                            </a>
                            <a className="text-light" href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter fa-sm fa-fw me-2"></i>
                            </a>
                            <a className="text-light" href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-linkedin fa-sm fa-fw"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className="top-header">
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
    </div> */}

            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand text-success logo h2 align-self-center" href="index.html">
                        WorldClassDiamond
                    </a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/diamond">
                                        Diamond
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."></input>
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </a> */}
                            <a className="nav-icon position-relative text-decoration-none" href="/login">
                                <i className="fa fa-fw fa-user text-dark mr-3" data-bs-toggle="popover" title="User Information" data-bs-content="This is where you can display user information"></i>
                                {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span> */}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    Your Company
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                            <Link to="/diamond" className="nav-link">
                                Diamond
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
            </nav> */}
        </>
    )
}

export default Header
