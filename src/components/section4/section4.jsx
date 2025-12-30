import React from "react";
import bg_3 from "../../assets/images/machine_learning.jpg";
import about_2 from "../../assets/images/arsiun_health_campus.jpg";
import "./section4.css";
import { animate, useInView, motion } from "framer-motion";

function AnimatedNumber({ value, duration = 2.2, className, style }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      onUpdate(v) {
        setCount(Math.floor(v));
      },
    });

    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ scale: 0.95, opacity: 0.9 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.45 }}
    >
      {count.toLocaleString()}
    </motion.span>
  );
}

function Section4() {
  return (
    <>
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: `url(${bg_3})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay home-style-overlay" />
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
                      href="https://youtu.be/6kdpXIrijUI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                      aria-label="Play video (opens in new tab)"
                    >
                      <i className="material-icons" aria-hidden="true">
                        play_circle_filled
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 heading-section heading-section-white pl-lg-5 pt-md-0 pt-5">
                <h2 className="mb-4">Arsi University</h2>
                <p>
                  Arsi University, established in October 2014, is a
                  comprehensive institution of higher education in Ethiopia. It
                  consists of five colleges and one school, offering a diverse
                  range of academic programs. The university is classified as an
                  Applied Science University, emphasizing practical education
                  and applied research.
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
                        <strong
                          className="number"
                          data-number={3}
                          style={{
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AnimatedNumber
                            value={3}
                            duration={2.8}
                            className="countup-number"
                            style={{
                              fontSize: "36px",
                              fontWeight: 700,
                              color: "#fff",
                            }}
                          />
                          <span
                            className="number-suffix"
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "36px",
                              lineHeight: "36px",
                              display: "inline-block",
                              verticalAlign: "baseline",
                            }}
                          >
                            K+
                          </span>
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
                        <strong
                          className="number"
                          data-number={10}
                          style={{
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AnimatedNumber
                            value={10}
                            duration={2.6}
                            className="countup-number"
                            style={{
                              fontSize: "36px",
                              fontWeight: 700,
                              color: "#fff",
                            }}
                          />
                          <span
                            className="number-suffix"
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "36px",
                              lineHeight: "36px",
                              display: "inline-block",
                              verticalAlign: "baseline",
                            }}
                          >
                            K+
                          </span>
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
                        <strong
                          className="number"
                          data-number={80}
                          style={{
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AnimatedNumber
                            value={80}
                            duration={2.6}
                            className="countup-number"
                            style={{
                              fontSize: "36px",
                              fontWeight: 700,
                              color: "#fff",
                            }}
                          />
                          <span
                            className="number-suffix"
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "36px",
                              lineHeight: "36px",
                              display: "inline-block",
                              verticalAlign: "baseline",
                            }}
                          >
                            +
                          </span>
                        </strong>
                        <span>Programs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md d-flex justify-content-center counter-wrap">
                    <div className="block-18">
                      <div className="icon">
                        <span className="flaticon-doctor" />
                      </div>
                      <div className="text">
                        <strong
                          className="number"
                          data-number={50}
                          style={{
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AnimatedNumber
                            value={50}
                            duration={2.2}
                            className="countup-number"
                            style={{
                              fontSize: "36px",
                              fontWeight: 700,
                              color: "#fff",
                            }}
                          />
                          <span
                            className="number-suffix"
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "36px",
                              lineHeight: "36px",
                              display: "inline-block",
                              verticalAlign: "baseline",
                            }}
                          >
                            +
                          </span>
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
