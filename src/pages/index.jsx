import React from "react";
import Menu from "../components/menu.jsx";
import Footer from "../components/footer.jsx";

// helper to resolve image URLs with Vite (works for assets in `src/assets/images`)
const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

function index() {
  return (
    <>
      <Menu />
      {/* END nav */}
      <section className="home-slider owl-carousel">
        <div
          className="slider-item"
          style={{ backgroundImage: `url(${img("bg_1.jpg")})` }}
        >
          <div className="overlay" />
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-start"
              data-scrollax-parent="true"
            >
              <div className="col-md-6 ftco-animate">
                <h1 className="mb-4">Education Needs Complete Solution</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p>
                  <a href="#" className="btn btn-primary px-4 py-3 mt-3">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item"
          style={{ backgroundImage: `url(${img("bg_2.jpg")})` }}
        >
          <div className="overlay" />
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-start"
              data-scrollax-parent="true"
            >
              <div className="col-md-6 ftco-animate">
                <h1 className="mb-4">University, College School Education</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p>
                  <a href="#" className="btn btn-primary px-4 py-3 mt-3">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-services ftco-no-pb">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-teacher" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Certified Teachers</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-reading" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Special Education</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-books" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Book &amp; Library</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-diploma" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Sport Clubs</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
              <div
                className="img"
                style={{ backgroundImage: `url(${img("about.jpg")})` }}
              />
            </div>
            <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 className="mb-4">What We Offer</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word.
              </p>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-security" />
                    </div>
                    <div className="text pl-3">
                      <h3>Safety First</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-reading" />
                    </div>
                    <div className="text pl-3">
                      <h3>Regular Classes</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-diploma" />
                    </div>
                    <div className="text pl-3">
                      <h3>Certified Teachers</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-education" />
                    </div>
                    <div className="text pl-3">
                      <h3>Sufficient Classrooms</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-jigsaw" />
                    </div>
                    <div className="text pl-3">
                      <h3>Creative Lessons</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-kids" />
                    </div>
                    <div className="text pl-3">
                      <h3>Sports Facilities</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: `url(${img("bg_3.jpg")})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2 d-flex">
            <div className="col-md-6 align-items-stretch d-flex">
              <div
                className="img img-video d-flex align-items-center"
                style={{ backgroundImage: `url(${img("about-2.jpg")})` }}
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
            <div className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5">
              <h2 className="mb-4">Arsi University</h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      <strong className="number" data-number={18}>
                        0
                      </strong>
                      <span>Certified Teachers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      <strong className="number" data-number={401}>
                        0
                      </strong>
                      <span>Students</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      <strong className="number" data-number={30}>
                        0
                      </strong>
                      <span>Courses</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className="flaticon-doctor" />
                    </div>
                    <div className="text">
                      <strong className="number" data-number={50}>
                        0
                      </strong>
                      <span>Awards Won</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
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
                style={{
                  backgroundImage: `url(${img("course-4.jpg")})`,
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
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">Certified Teachers</h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </div>
          </div>
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
                    style={{
                      backgroundImage: `url(${img("teacher-4.jpg")})`,
                    }}
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

      <section
        className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
        style={{ backgroundImage: `url(${img("bg_5.jpg")})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6 py-5 px-md-5">
              <div className="py-md-5">
                <div className="heading-section heading-section-white ftco-animate mb-5">
                  <h2 className="mb-4">Request A Quote</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <form action="#" className="appointment-form ftco-animate">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down" />
                          </div>
                          <select
                            name="course"
                            id="course"
                            className="form-control"
                          >
                            <option value>Select Your Course</option>
                            <option value>Art Lesson</option>
                            <option value>Language Lesson</option>
                            <option value>Music Lesson</option>
                            <option value>Sports</option>
                            <option value>Other Services</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={2}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="submit"
                        defaultValue="Request A Quote"
                        className="btn btn-primary py-3 px-4"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">
                <span>Recent</span> Blog
              </h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20 d-flex align-items-end"
                  style={{
                    backgroundImage: `url(${img("image_1.jpg")})`,
                  }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">26</span>
                    <span className="mos">June</span>
                    <span className="yr">2019</span>
                  </div>
                </a>
                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <a href="#">Skills To Develop Your Child Memory</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <a href="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </a>
                    </p>
                    <p className="ml-auto mb-0">
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20 d-flex align-items-end"
                  style={{
                    backgroundImage: `url(${img("image_2.jpg")})`,
                  }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">26</span>
                    <span className="mos">June</span>
                    <span className="yr">2019</span>
                  </div>
                </a>
                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <a href="#">Skills To Develop Your Child Memory</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <a href="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </a>
                    </p>
                    <p className="ml-auto mb-0">
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20 d-flex align-items-end"
                  style={{
                    backgroundImage: `url(${img("image_3.jpg")})`,
                  }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">26</span>
                    <span className="mos">June</span>
                    <span className="yr">2019</span>
                  </div>
                </a>
                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <a href="#">Skills To Develop Your Child Memory</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <a href="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </a>
                    </p>
                    <p className="ml-auto mb-0">
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">Student Says About Us</h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </div>
          </div>
          <div className="row ftco-animate justify-content-center">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap d-flex">
                    <div
                      className="user-img mr-4"
                      style={{
                        backgroundImage: `url(${img("teacher-1.jpg")})`,
                      }}
                    ></div>
                    <div className="text ml-2">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Racky Henderson</p>
                      <span className="position">Father</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap d-flex">
                    <div
                      className="user-img mr-4"
                      style={{
                        backgroundImage: `url(${img("teacher-2.jpg")})`,
                      }}
                    ></div>
                    <div className="text ml-2">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Henry Dee</p>
                      <span className="position">Mother</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap d-flex">
                    <div
                      className="user-img mr-4"
                      style={{
                        backgroundImage: `url(${img("teacher-3.jpg")})`,
                      }}
                    ></div>
                    <div className="text ml-2">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Mark Huff</p>
                      <span className="position">Mother</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap d-flex">
                    <div
                      className="user-img mr-4"
                      style={{
                        backgroundImage: `url(${img("teacher-4.jpg")})`,
                      }}
                    ></div>
                    <div className="text ml-2">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Rodel Golez</p>
                      <span className="position">Mother</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap d-flex">
                    <div
                      className="user-img mr-4"
                      style={{
                        backgroundImage: `url(${img("teacher-1.jpg")})`,
                      }}
                    ></div>
                    <div className="text ml-2">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Ken Bosh</p>
                      <span className="position">Mother</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-gallery">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_1.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: `url(${img("course-1.jpg")})`,
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_2.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: `url(${img("image_2.jpg")})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_3.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: `url(${img("image_3.jpg")})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_4.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: `url(${img("image_4.jpg")})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <Footer />
      {/* loader */}
      {/* <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            strokeMiterlimit={10}
            stroke="#F96D00"
          />
        </svg>
      </div> */}
    </>
  );
}

export default index;
