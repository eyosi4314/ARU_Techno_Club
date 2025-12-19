import React from "react";
import { Link } from "react-router-dom";
import Home from "../home/home";
import logo from "../../../public/Arsi_logo.ico";
import Club_logo from "../../assets/images/Club_logo.jpg";
import "./Menu.css";

function menu() {
  return (
    <>
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Arsi logo" className="brand-logo" /> Arsi.{" "}
                <span>University</span>
              </Link>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <span>ARU_techno_Club@gmail.com</span>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <div className="text">
                    <span>Call</span>
                    <span>Call Us: +2519090909</span>
                  </div>
                </div>
                <div className="col-md topper d-flex align-items-center justify-content-end">
                  <div className="d-flex flex-column align-items-end">
                    <div className="login-logo mb-2">
                      <img
                        src={Club_logo}
                        alt="Club logo"
                        className="brand-logo login-above"
                      />
                    </div>
                    <p className="mb-2 mb-md-0">
                      <Link
                        to="/contact"
                        className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center"
                      >
                        <img
                          src={Club_logo}
                          alt="Club logo"
                          className="brand-logo"
                        />
                        <span>Log In</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center px-4">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <form action="#" className="searchform order-lg-last">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control pl-3"
                placeholder="Search"
              />
              <button type="submit" className="form-control search">
                <span className="ion-ios-search" />
              </button>
            </div>
          </form>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link pl-0">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/division" className="nav-link">
                  Division
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teacher" className="nav-link">
                  Staff
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default menu;
