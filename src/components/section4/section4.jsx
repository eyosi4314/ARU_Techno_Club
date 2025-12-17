import React from "react";
import bg_3 from "../../assets/images/arsiun_ardu_campus.jpg";
import about_2 from "../../assets/images/arsiun_ardu_campus.jpg";

function Section4() {
  return (
    <>
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: `url(${bg_3})` }}
        data-stellar-background-ratio="0.5"
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />
        <div className="container">
          {/* keep content above overlay */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="row justify-content-center mb-5 pb-2 d-flex">
              <div className="col-md-6 align-items-stretch d-flex">
                <div
                  className="img img-video d-flex align-items-center"
                  style={{ backgroundImage: `url(${about_2})` }}
                >
                  <div className="video justify-content-center">
                    <a
                      href="https://vimeo.com/45830194"
                      className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                    >
                      <span className="ion-ios-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 heading-section heading-section-white pl-lg-5 pt-md-0 pt-5">
                <h2 className="mb-4">Arsi University</h2>
                <p>
                  Arsi University is a growing public institution committed to
                  academic excellence, innovation, and community impact. The
                  university empowers students through quality education,
                  skilled instructors, and a supportive learning environment
                  that encourages research, technology, and real-world problem
                  solving.
                </p>
                <p>
                  The university equips students with advanced technology
                  skills, innovation experience, and research expertise to build
                  solutions for the digital world.
                </p>
              </div>
            </div>
            <div className="row d-md-flex align-items-center justify-content-center">
              <div className="col-lg-12">
                <div className="row d-md-flex align-items-center">
                  <div className="col-md d-flex justify-content-center counter-wrap">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong className="number" data-number={18}>
                          18
                        </strong>
                        <span>Certified Teachers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md d-flex justify-content-center counter-wrap">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong className="number" data-number={401}>
                          401
                        </strong>
                        <span>Students</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md d-flex justify-content-center counter-wrap">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong className="number" data-number={30}>
                          30
                        </strong>
                        <span>Courses</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md d-flex justify-content-center counter-wrap">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong className="number" data-number={50}>
                          50
                        </strong>
                        <span>Awards Won</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section4;
