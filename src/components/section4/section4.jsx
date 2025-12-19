import React from "react";
import bg_3 from "../../assets/images/arsiun_ardu_campus.jpg";
import about_2 from "../../assets/images/arsiun_ardu_campus.jpg";
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
                      href="https://youtu.be/_V6PYCiLuHI?si=hwGXEOQWbhX4ak-I"
                      target="_blank"
                      rel="noopener noreferrer"
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
                          data-number={15}
                          style={{
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AnimatedNumber
                            value={15}
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
                          data-number={70}
                          style={{
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AnimatedNumber
                            value={70}
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
                        <span>Departments</span>
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
