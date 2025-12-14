import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

function about() {
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
              <h1 className="mb-2 bread">About Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  About us <i className="ion-ios-arrow-forward" />
                </span>
              </p>
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
                style={{
                  backgroundImage: `url(${img("about.jpg")})`,
                }}
              />
            </div>
            <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
              <h2 className="mb-4">Fox University Stablished Since 1960</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{
          backgroundImage: `url(${img("bg_3.jpg")})`,
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2 d-flex">
            <div className="col-md-6 align-items-stretch d-flex">
              <div
                className="img img-video d-flex align-items-center"
                style={{
                  backgroundImage: `url(${img("about-2.jpg")})`,
                }}
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
              <h2 className="mb-4">Fox University</h2>
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
                style={{
                  backgroundImage: `url(${img("image_2.jpg")})`,
                }}
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

     
      <Footer />
     
    </>
  );
}

export default about;
