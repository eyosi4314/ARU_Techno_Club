import React from "react";
import course1 from "../../assets/images/web_development.jpg";
import course2 from "../../assets/images/machine_learning.jpg";
import course3 from "../../assets/images/cyber_secuirty.jpg";
import course4 from "../../assets/images/graphics_design.jpg";
import course5 from "../../assets/images/big_data_2.avif";
import course6 from "../../assets/images/competitive_programming_2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Section5.css";

function Section5() {
  const courses = [
    {
      img: course1,
      title: "Web Developement ",
      teacher: "Projects",
      seats: "Coding ",
      duration: " Web Apps",
      description:
        "Designing and building responsive websites and applications using modern frameworks, tools, and best practices to solve real-world problems.",
    },
    {
      img: course2,
      title: "AI & Machine Learning",
      teacher: " AI",
      seats: "Innovation",
      duration: "Research",
      description:
        "Developing intelligent systems that learn from data to automate tasks, recognize patterns, and support smart decision-making processes.",
    },
    {
      img: course3,
      title: " Cybersecurity ",
      teacher: "Security",
      seats: "Networks",
      duration: "Protection",
      description:
        "Protecting systems, networks, and data by identifying vulnerabilities, preventing attacks, and applying secure technology practices.",
    },
    {
      img: course4,
      title: "Graphics Design",
      teacher: "Design",
      seats: "UX/UI",
      duration: "Branding",
      description:
        "Creating visual identities, digital content, and creative designs that communicate ideas effectively across platforms and media.",
    },
    {
      img: course5,
      title: "Date Science & Big Data",
      teacher: "Data",
      seats: "Analysis",
      duration: "Insights",
      description:
        "Extracting insights from complex datasets using statistical analysis, data engineering, and scalable technologies for informed decisions",
    },
    {
      img: course6,
      title: "competitive programming",
      teacher: "Algorithms",
      seats: "Problem Solving",
      duration: "Contests",
      description:
        "Enhancing coding skills, algorithmic thinking, and problem-solving abilities through competitive programming challenges and contests.",
    },
  ];

  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-3 pb-1">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">
                <span>Our</span> Division
              </h2>
              <p>
                ARU Techno Based Club is organized into specialized divisions
                that focus on skill development, innovation, and real-world
                technology solutions. Each division offers targeted programs and
                projects to equip members with expertise in their chosen fields.
              </p>
            </div>
          </div>
          <div className="row">
            {/* Carousel replacing static grid: show 3 items per slide */}
            <div className="col-12">
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                emulateTouch={true}
                swipeable={false}
                useKeyboardArrows={true}
                centerMode={true}
                centerSlidePercentage={33.3333}
                autoPlay={true}
                interval={2000}
                stopOnHover={true}
                dot
                showIndicators={false}
              >
                {courses.map((c, idx) => (
                  <div className="course-slide" key={idx}>
                    <div className="course-card px-2">
                      <div
                        className="img"
                        style={{
                          backgroundImage: `url(${c.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          height: "220px",
                        }}
                      />
                      <div className="text pt-4">
                        <p className="meta d-flex course-meta">
                          <span>{c.teacher}</span>
                          <span>{c.seats}</span>
                          <span>{c.duration}</span>
                        </p>
                        <h3>
                          <a href="#">{c.title}</a>
                        </h3>
                        <p className="course-desc">{c.description}</p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Apply now
                          </a>
                        </p>
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

export default Section5;
