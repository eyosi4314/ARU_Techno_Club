import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <>
      <section className="ftco-services ftco-no-pb">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-teacher" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Club Leaders</h3>
                  <p>
                    {" "}
                    They guide members with clear vision, and lead projects that
                    turn ideas into real-world solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-reading" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Club Members</h3>
                  <p>
                    Are passionate innovators who collaborate, learn, and build
                    practical solutions using modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-books" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Club Division</h3>
                  <p>
                    To collaborate through shared courses to build practical,
                    real-world tech skills together that prepare members for
                    real-world challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-diploma" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Club Advisor</h3>
                  <p>
                    Their expertise ensures high-quality learning, strong
                    leadership, and future-ready education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
