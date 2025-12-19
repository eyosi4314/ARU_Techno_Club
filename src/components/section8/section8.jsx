import React from "react";
import image1 from "../../assets/images/eyosi_presentation.jpg";
import image2 from "../../assets/images/students_listen.jpg";
import image3 from "../../assets/images/ASTU_Compitition.jpg";
import "./Section8.css";
function section8() {
  return (
    <div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">
                <span>Recent</span> Blog
              </h2>
              <p>
                A space where we share ideas, skills, and experiences that
                strengthen collaboration, innovation, and leadership among tech
                students.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20 d-flex align-items-end"
                  style={{ backgroundImage: `url(${image1})` }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">20</span>
                    <span className="mos">october</span>
                    <span className="yr">2025</span>
                  </div>
                </a>
                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <a href="#">Welcoming Tech Students to Campus</a>
                  </h3>
                  <p>
                    Our Tech Club organized an orientation session for fresh
                    tech students to introduce them to campus life, club
                    activities, and opportunities in technology, leadership, and
                    innovation.
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
            <div className="col-md-6 col-lg-4 ">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20 d-flex align-items-end"
                  style={{ backgroundImage: `url(${image2})` }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">6</span>
                    <span className="mos">November</span>
                    <span className="yr">2025</span>
                  </div>
                </a>
                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <a href="#">
                      Join Our Divisions Through the Selection Exam
                    </a>
                  </h3>
                  <p>
                    An overview of our club divisions and the selection process,
                    explaining how students can apply, prepare for the entry
                    exam, and become part of teams focused on learning,
                    innovation, and impact.
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
            <div className="col-md-6 col-lg-4 ">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20 d-flex align-items-end"
                  style={{ backgroundImage: `url(${image3})` }}
                >
                  <div className="meta-date text-center p-2">
                    <span className="day">26</span>
                    <span className="mos">June</span>
                    <span className="yr">2025</span>
                  </div>
                </a>
                <div className="text bg-white p-4">
                  <h3 className="heading">
                    <a href="#">Competitive Programming Across Universities</a>
                  </h3>
                  <p>
                    A platform for collaboration and healthy competition where
                    students from different universities test their
                    problem-solving and algorithmic skills through competitive programming
                    challenges.
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
    </div>
  );
}

export default section8;
