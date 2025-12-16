import React from "react";
import course1 from "../../assets/images/course-1.jpg";
import course2 from "../../assets/images/course-2.jpg";
import course3 from "../../assets/images/course-3.jpg";
import course4 from "../../assets/images/course-4.jpg";

function Section5() {
  return (
    <>
      <section className="ftco-section">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">
                <span>Our</span> Courses
              </h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 course">
              <div
                className="img"
                style={{ backgroundImage: `url(${course1})` }}
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
            <div className="col-md-3 course">
              <div
                className="img"
                style={{ backgroundImage: `url(${course2})` }}
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
            <div className="col-md-3 course">
              <div
                className="img"
                style={{ backgroundImage: `url(${course3})` }}
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
            <div className="col-md-3 course">
              <div
                className="img"
                style={{ backgroundImage: `url(${course4})` }}
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
    </>
  );
}

export default Section5;
