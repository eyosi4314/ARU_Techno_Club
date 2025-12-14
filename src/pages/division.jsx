import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

function division() {
  return (
    <>
      <Menu />
      {/* END nav */}
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: `url(${img("bg_1.jpg")})` }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread">Courses</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Courses <i className="ion-ios-arrow-forward" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${img("course-1.jpg")})`,
                }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${img("course-2.jpg")})`,
                }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${img("course-3.jpg")})`,
                }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: `url(${img("course-4.jpg")})` }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: `url(${img("course-5.jpg")})` }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: `url(${img("course-6.jpg")})` }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: `url(${img("course-7.jpg")})` }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 course ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: `url(${img("course-8.jpg")})` }}
              />
              <div className="text pt-4">
                <p className="meta d-flex">
                  <span>
                    <i className="icon-user mr-2" />
                    Mr. Khan
                  </span>
                  <span>
                    <i className="icon-table mr-2" />
                    10 seats
                  </span>
                  <span>
                    <i className="icon-calendar mr-2" />4 Years
                  </span>
                </p>
                <h3>
                  <a href="#">Electric Engineering</a>
                </h3>
                <p>
                  Separated they live in. A small river named Duden flows by
                  their place and supplies it with the necessary regelialia. It
                  is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Apply now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    
    </>
  );
}

export default division;
