import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Section9.css";
import t1 from "../../assets/images/teacher-1.jpg";
import t2 from "../../assets/images/teacher-2.jpg";
import t3 from "../../assets/images/teacher-3.jpg";
import t4 from "../../assets/images/teacher-4.jpg";

function section9() {
  return (
    <>
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
              <Carousel
                className="section9-carousel"
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                emulateTouch={true}
                autoPlay={true}
                interval={5000}
                stopOnHover={true}
                swipeable={true}
              >
                {[
                  { img: t1, name: "Racky Henderson", position: "Father" },
                  { img: t2, name: "Henry Dee", position: "Mother" },
                  { img: t3, name: "Mark Huff", position: "Mother" },
                  { img: t4, name: "Rodel Golez", position: "Mother" },
                  { img: t1, name: "Ken Bosh", position: "Mother" },
                ].map((item, idx) => (
                  <div className="item" key={idx}>
                    <div className="testimony-wrap d-flex testimonial-card">
                      <div
                        className="user-img mr-4"
                        style={{ backgroundImage: `url(${item.img})` }}
                      ></div>
                      <div className="text ml-2">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">{item.name}</p>
                        <span className="position">{item.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default section9;
