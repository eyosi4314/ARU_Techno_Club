import React from "react";
import "./Section7.css";
import webDev from "../../assets/images/web_development.jpg";

function section7() {
  return (
    <>
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Address</h3>
                <p>Ethiopia , Asela, Arsi University Main Campus </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Contact Number</h3>
                <p>
                  <a href="tel://1234567920">+ 25109090909</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Email Address</h3>
                <p>
                  <a href="mailto:info@yoursite.com">
                    ARU_techno_Club@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Website</h3>
                <p>
                  <a href="#">ARU_Techno_Club.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last registration-card">
              <div className="registration-header mb-3">
                <h2>Join ARU Techno Club</h2>
                <p className="muted">
                  Register to participate in activities, workshops and receive
                  updates.
                </p>
              </div>
              <form action="#" className="registration-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Department"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Batch/year"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone (optional)"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select className="form-control">
                      <option>Area of interest</option>
                      <option>Web Development</option>
                      <option>AI & Machine Learning</option>
                      <option>Cybersecurity</option>
                      <option>Competitive Programming</option>
                      <option>Design</option>
                      <option>Data Science</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={4}
                    className="form-control"
                    placeholder="Tell us a bit about yourself (optional)"
                    defaultValue={""}
                  />
                </div>
                <div className="form-row align-items-center">
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-primary btn-register"
                    >
                      Register Now
                    </button>
                  </div>
                  <div className="form-group mb-0 ml-3 muted small">
                    By registering you agree to receive updates. Unsubscribe
                    anytime.
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="registration-visual w-100 d-flex align-items-stretch">
                <div
                  className="registration-image"
                  style={{
                    backgroundImage: `url(${webDev})`,
                  }}
                >
                  <div className="img-overlay">
                    <h3>Web Development</h3>
                    <p className="small muted">Explore projects & workshops</p>
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

export default section7;
