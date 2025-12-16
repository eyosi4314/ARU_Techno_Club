import React from "react";
import aboutImg from "../../assets/images/about.jpg";

function Section3() {
  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
              <div
                className="img"
                style={{ backgroundImage: `url(${aboutImg})` }}
              />
            </div>
            <div className="col-md-7 wrap-about py-5 pr-md-4">
              <h2 className="mb-4">What We Offer</h2>
              <p>
                Arsi University Technology Club offers hands-on training,
                real-world projects, and collaborative learning in areas like
                web development, software engineering, networking, AI, and
                emerging technologies. We provide workshops, hackathons,
                mentorship, and a supportive community where students build
                practical skills, gain confidence, and prepare for real tech
                careers.
              </p>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-security" />
                    </div>
                    <div className="text pl-3">
                      <h3>🚀 Hands-On Projects </h3>
                      <p>
                        Build real applications, systems, and solutions through
                        team-based projects that solve real problems.
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
                      <h3>💻 Skill-Focused Training</h3>
                      <p>
                        Practical training in web development, software
                        engineering, networking, AI, and emerging technologies.
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
                      <h3>🧠 Workshops & Bootcamps</h3>
                      <p>
                        Intensive sessions led by skilled students, mentors, and
                        professionals to boost your tech skills fast.
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
                      <h3>🤝 Collaboration & Community</h3>
                      <p>
                        Connect with like-minded students, share knowledge, and
                        grow together in a supportive tech community.
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
                      <h3>🏆 Hackathons & Competitions</h3>
                      <p>
                        Participate in innovation challenges, coding
                        competitions, and tech events to test your skills.
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
                      <h3>🌍 Career & Industry Exposure</h3>
                      <p>
                        Get mentorship, tech talks, and opportunities that
                        prepare you for internships, startups, and careers.
                      </p>
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

export default Section3;
