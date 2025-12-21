import React from "react";
import teacher1 from "../../assets/images/Mr_Milikesa.jpg";
import teacher2 from "../../assets/images/Mr_Sultan.jpg";
import teacher3 from "../../assets/images/Ms_marta2.jpg";
import teacher4 from "../../assets/images/Mr_Sadik.jpg";

function Section6() {
  return (
    <>
      <section className="ftco-section bg-light">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Academic Leadership & Support</h2>
              <p>
                ARU_Techno_Based_Club is supported by experienced department
                heads and academic leaders from Computer Science, Information
                Systems, and Information Technology. Their guidance strengthens
                our training, projects, and innovation-driven activities.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${teacher1})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Mr. Milikesa Dejena </h3>
                  <span className="position mb-2">IS Department Head</span>
                  <div className="faded">
                    <p>
                      Driven by innovation and coding at Arsi University Techno
                      Based Club.
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
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${teacher2})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Mr. Sultan Shekana </h3>
                  <span className="position mb-2">IT Department Head</span>
                  <div className="faded">
                    <p>
                      A student-led technology club fostering innovation,
                      collaboration, and practical digital skills at Arsi
                      University.
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
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${teacher3})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Ms. Martha Mezgebu </h3>
                  <span className="position mb-2">CS Department Head</span>
                  <div className="faded">
                    <p>
                      Empowering students through teamwork, practical skills,
                      and confidence to become innovative technology leaders.
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
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: `url(${teacher4})` }}
                  />
                </div>
                <div className="text pt-3 text-center">
                  <h3>Mr. Sadik Abas</h3>
                  <span className="position mb-2">Staff Representative </span>
                  <div className="faded">
                    <p>
                      Supporting student-led innovation in tech to shape Ethiopia’s digital future with vision and global impact from Arsi to the world.
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
    </>
  );
}

export default Section6;
