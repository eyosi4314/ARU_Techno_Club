import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../home/home";
import logo from "../../../public/Arsi_logo.ico";
import Club_logo from "../../assets/images/Club_logo.jpg";
import "./Menu.css";

function menu() {
  const [isOpen, setIsOpen] = useState(false);
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
                    <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 5.5A2.5 2.5 0 015.5 3h13A2.5 2.5 0 0121 5.5v13A2.5 2.5 0 0118.5 21h-13A2.5 2.5 0 013 18.5v-13zM5 6v12h14V6l-7 5L5 6z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <a className="official-email" href="http://ARU_techno_Club@gmail.com">
                      {" "}
                      Offical Email
                    </a>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <svg className="telegram-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 240 240" fill="none" aria-hidden="true">
                      <path d="M20 120 L220 30 L140 200 L120 160 L80 200 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text">
                    <span>Telegram</span>

                    <span>
                      {" "}
                      <a className="official-telegram" href="https://t.me/ARUTBCPublicAccessible">
                        Offical Channel
                      </a>
                    </span>
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
                        className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center login-btn"
                      >
                        <img
                          src={Club_logo}
                          alt="Club logo"
                          className="brand-logo"
                        />
                        <span className="login-text">Log In</span>
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
            onClick={() => setIsOpen((s) => !s)}
            aria-controls="ftco-nav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span
              className={`hamburger ${isOpen ? "open" : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">Menu</span>
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
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="ftco-nav"
          >
            <ul className="navbar-nav mr-auto" onClick={() => setIsOpen(false)}>
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
