import React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";
const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

function teacher() {
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
              <h1 className="mb-2 bread">Certified Teacher</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Teacher <i className="ion-ios-arrow-forward" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{
                      backgroundImage: `url(${img("teacher-1.jpg")})`,
                    }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Bianca Wilson</h3>
                  <span className="position mb-2">Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{
                      backgroundImage: `url(${img("teacher-2.jpg")})`,
                    }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Mitch Parker</h3>
                  <span className="position mb-2">English Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{
                      backgroundImage: `url(${img("teacher-3.jpg")})`,
                    }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Stella Smith</h3>
                  <span className="position mb-2">Art Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${img("teacher-4.jpg")})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Monshe Henderson</h3>
                  <span className="position mb-2">Science Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${img("teacher-5.jpg")})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Bianca Wilson</h3>
                  <span className="position mb-2">Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${img("teacher-6.jpg")})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Mitch Parker</h3>
                  <span className="position mb-2">English Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${img("teacher-7.jpg")})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Stella Smith</h3>
                  <span className="position mb-2">Art Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${img("teacher-8.jpg")})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Monshe Henderson</h3>
                  <span className="position mb-2">Science Teacher</span>
                  <div className="faded">
                    <p>
                      I am an ambitious workaholic, but apart from that, pretty
                      simple person.
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* loader */}
      {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div> */}
    </>
  );
}

export default teacher;
