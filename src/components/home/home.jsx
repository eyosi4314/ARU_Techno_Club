import React from "react";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Carousel
        className="home-slider owl-carousel owl-loaded"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {img.map((imageLink, idx) => (
          <div
            key={idx}
            className="slider-item"
            style={{ backgroundImage: `url(${imageLink})` }}
          >
            <div className="overlay" />

            <div className="container">
              <div
                className="row no-gutters slider-text align-items-center justify-content-start"
                data-scrollax-parent="false"
              >
                <div className="col-md-6 ftco-animate">
                  <h1 className="mb-4">Arsi University Techno Based Club</h1>
                  <p>
                    Empowering student leaders to innovate with technology and
                    create solutions for society.
                  </p>
                  <p>
                    <Link to="#" className="btn btn-primary px-4 py-3 mt-3">
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Home;
