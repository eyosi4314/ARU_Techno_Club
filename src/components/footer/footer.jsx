import React from "react";
import { Link } from "react-router-dom";
const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

function footer() {
  return (
    <>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">
                        Arsi University, Ethipoia , Asela Town
                      </span>
                    </li>
                    <li>
                      <Link to="/home">
                        <span className="icon icon-phone" />
                        <span className="text">+2519090909</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon icon-envelope" />
                        <span className="text">ARU_techno_Club@gmail.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Club Division</h2>
                <div className="block-21 mb-4 d-flex">
                  <Link
                    to="#"
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: `url(${img("image_1.jpg")})`,
                    }}
                  ></Link>

                  <div className="text">
                    <h3 className="heading">
                      <Link to="#">
                        We innovate, build, and explore the future of
                        technology.
                      </Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <Link to="#">
                          <span className="icon-calendar" /> December, 2025
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                          <span className="icon-person" /> Admin
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                          <span className="icon-chat" /> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-5 d-flex">
                  <Link
                    to="#"
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: `url(${img("image_2.jpg")})`,
                    }}
                  ></Link>
                  <div className="text">
                    <h3 className="heading">
                      <Link to="#">
                        Join our community of creators and developers.
                      </Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <Link to="#">
                          <span className="icon-calendar" /> December , 2025
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                          <span className="icon-person" /> Admin
                        </Link>
                      </div>
                      <div>
                        <Link to="#">
                          <span className="icon-chat" /> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/home">
                      <span className="ion-ios-arrow-round-forward mr-2" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <span className="ion-ios-arrow-round-forward mr-2" />
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <span className="ion-ios-arrow-round-forward mr-2" />
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/division">
                      <span className="ion-ios-arrow-round-forward mr-2" />
                      Division
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span className="ion-ios-arrow-round-forward mr-2" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-2 text-center"
                      placeholder="Enter email address"
                    />
                    <input
                      type="submit"
                      defaultValue="Subscribe"
                      className="form-control submit px-3"
                    />
                  </div>
                </form>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className="ftco-animate">
                    <Link to="#">
                      <span className="icon-twitter" />
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to="#">
                      <span className="icon-facebook" />
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to="#">
                      <span className="icon-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright © All rights reserved | This website is made with{" "}
                <i className="icon-heart" aria-hidden="true" /> by{" "}
                <Link to="#" target="_blank">
                  Eyosiyas H/Michael
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
