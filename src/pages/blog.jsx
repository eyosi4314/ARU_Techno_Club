import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

function blog() {
  return (
    <>
      <Menu />
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
                  <Link to="/">
                    {" "}
                    Home <i className="ion-ios-arrow-forward" />
                  </Link>
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
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <Link
                  to="/blogsingel"
                  className="block-20 d-flex align-items-end"
                  style={{
                    backgroundImage: `url(${img("image_6.jpg")})`,
                  }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">26</span>
                    <span className="mos">June</span>
                    <span className="yr">2019</span>
                  </div>
                </Link>

                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <Link to="#">Skills To Develop Your Child Memory</Link>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <Link to="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </Link>
                    </p>
                    <p className="ml-auto mb-0">
                      <Link to="#" className="mr-2">
                        Admin
                      </Link>

                      <Link to="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <Link
                  to="/blogsingel"
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
                </Link>

                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <Link to="#">Skills To Develop Your Child Memory</Link>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <Link to="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </Link>
                    </p>
                    <p className="ml-auto mb-0">
                      <Link to="#" className="mr-2">
                        Admin
                      </Link>

                      <Link to="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <Link
                  to="/blogsingel"
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
                </Link>

                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <Link to="#">Skills To Develop Your Child Memory</Link>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <Link to="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </Link>
                    </p>
                    <p className="ml-auto mb-0">
                      <Link to="#" className="mr-2">
                        Admin
                      </Link>
                      <Link to="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <Link
                  to="/blogsingel"
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
                </Link>

                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <Link to="#">Skills To Develop Your Child Memory</Link>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <Link to="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </Link>
                    </p>
                    <p className="ml-auto mb-0">
                      <Link to="#" className="mr-2">
                        Admin
                      </Link>
                      <Link to="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <Link
                  to="/blogsingel"
                  className="block-20 d-flex align-items-end"
                  style={{
                    backgroundImage: `url(${img("image_4.jpg")})`,
                  }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">26</span>
                    <span className="mos">June</span>
                    <span className="yr">2019</span>
                  </div>
                </Link>

                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <Link to="#">Skills To Develop Your Child Memory</Link>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <Link to="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </Link>
                    </p>
                    <p className="ml-auto mb-0">
                      <Link to="#" className="mr-2">
                        Admin
                      </Link>
                      <Link to="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ftco-animate">
              <div className="blog-entry">
                <Link
                  to="/blogsingel"
                  className="block-20 d-flex align-items-end"
                  style={{
                    backgroundImage: `url(${img("image_5.jpg")})`,
                  }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">26</span>
                    <span className="mos">June</span>
                    <span className="yr">2019</span>
                  </div>
                </Link>

                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <Link to="#">Skills To Develop Your Child Memory</Link>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <p className="mb-0">
                      <Link to="#" className="btn btn-primary">
                        Read More{" "}
                        <span className="ion-ios-arrow-round-forward" />
                      </Link>
                    </p>
                    <p className="ml-auto mb-0">
                      <Link to="#" className="mr-2">
                        Admin
                      </Link>
                      <Link to="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    
    </>
  );
}

export default blog;
