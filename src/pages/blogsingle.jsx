import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;
function blogsingel() {
  return (
    <>
      <Menu />
      {/* END nav */}
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(${img("bg_1.jpg")})`,
        }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread">Blog Single</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span className="mr-2">
                  <a href="index.html">
                    Blog <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Blog Single <i className="ion-ios-arrow-forward" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <h2 className="mb-3">#2. Creative WordPress Themes</h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in. Exercitationem atque quidem
                tempora maiores ex architecto voluptatum aut officia doloremque.
                Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos odit quasi repellat qui officiis
                reiciendis incidunt hic non? Debitis commodi aut, adipisci.
              </p>
              <p>
                <img
                  src="../assets/images/image_2.jpg"
                  alt
                  className="img-fluid"
                />
              </p>
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
                tenetur tempore, nisi culpa voluptate maiores officiis quis vel
                ab consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro. Deserunt minus,
                quibusdam iste enim veniam, modi rem maiores.
              </p>
              <p>
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
                quo velit commodi rerum eum quidem pariatur! Quia fuga iste
                tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
                explicabo soluta commodi libero voluptatem similique id quidem?
                Blanditiis voluptates aperiam non magni. Reprehenderit nobis
                odit inventore, quia laboriosam harum excepturi ea.
              </p>
              <p>
                Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam
                ipsam quidem, dolor distinctio similique asperiores voluptas
                enim, exercitationem ratione aut adipisci modi quod quibusdam
                iusto, voluptates beatae iure nemo itaque laborum. Consequuntur
                et pariatur totam fuga eligendi vero dolorum provident.
                Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus
                culpa, tenetur recusandae!
              </p>
              <p>
                Voluptas dolores dignissimos dolorum temporibus, autem aliquam
                ducimus at officia adipisci quasi nemo a perspiciatis provident
                magni laboriosam repudiandae iure iusto commodi debitis est
                blanditiis alias laborum sint dolore. Dolores, iure,
                reprehenderit. Error provident, pariatur cupiditate soluta
                doloremque aut ratione. Harum voluptates mollitia illo minus
                praesentium, rerum ipsa debitis, inventore?
              </p>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Life
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Sport
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Tech
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Travel
                  </a>
                </div>
              </div>
              <div className="about-author d-flex p-4 bg-light">
                <div className="bio mr-5">
                  <img
                    src="../assets/images/teacher-1.jpg"
                    alt="Image placeholder"
                    className="img-fluid mb-4"
                  />
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut, sunt placeat nam vero culpa sapiente
                    consectetur similique, inventore eos fugit cupiditate
                    numquam!
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-5">
                <h3 className="mb-5 h4 font-weight-bold">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img
                        src="../assets/images/teacher-1.jpg"
                        alt="Image placeholder"
                      />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta mb-2">June 27, 2019 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img
                        src="../assets/images/teacher-1.jpg"
                        alt="Image placeholder"
                      />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta mb-2">June 27, 2019 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img
                            src="../assets/images/teacher-1.jpg"
                            alt="Image placeholder"
                          />
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta mb-2">
                            June 27, 2019 at 2:21pm
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem laborum necessitatibus, ipsam
                            impedit vitae autem, eum officia, fugiat saepe enim
                            sapiente iste iure! Quam voluptas earum impedit
                            necessitatibus, nihil?
                          </p>
                          <p>
                            <a href="#" className="reply">
                              Reply
                            </a>
                          </p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img
                                src="images/teacher-1.jpg"
                                alt="Image placeholder"
                              />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta mb-2">
                                June 27, 2019 at 2:21pm
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum
                                officia, fugiat saepe enim sapiente iste iure!
                                Quam voluptas earum impedit necessitatibus,
                                nihil?
                              </p>
                              <p>
                                <a href="#" className="reply">
                                  Reply
                                </a>
                              </p>
                            </div>
                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img
                                    src="images/teacher-1.jpg"
                                    alt="Image placeholder"
                                  />
                                </div>
                                <div className="comment-body">
                                  <h3>John Doe</h3>
                                  <div className="meta mb-2">
                                    June 27, 2019 at 2:21pm
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Pariatur quidem laborum
                                    necessitatibus, ipsam impedit vitae autem,
                                    eum officia, fugiat saepe enim sapiente iste
                                    iure! Quam voluptas earum impedit
                                    necessitatibus, nihil?
                                  </p>
                                  <p>
                                    <a href="#" className="reply">
                                      Reply
                                    </a>
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img
                        src="../assets/images/teacher-1.jpg"
                        alt="Image placeholder"
                      />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta mb-2">June 27, 2019 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
                {/* END comment-list */}
                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5 h4 font-weight-bold">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name
                        id="message"
                        cols={30}
                        rows={10}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="btn py-3 px-4 btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>{" "}
            {/* .col-md-8 */}
            <div className="col-lg-4 sidebar ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Category</h3>
                <ul className="categories">
                  <li>
                    <a href="#">
                      Art <span>(6)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sports <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Language <span>(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Food <span>(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Music <span>(2)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Popular Articles</h3>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_1.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar" /> June 27, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person" /> Dave Lewis
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: `url(${img("image_2.jpg")})`,
                    }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar" /> June 27, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person" /> Dave Lewis
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: `url(${img("image_3.jpg")})`,
                    }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar" /> June 27, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person" /> Dave Lewis
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Tag Cloud</h3>
                <ul className="tagcloud m-0 p-0">
                  <a href="#" className="tag-cloud-link">
                    School
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Kids
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Nursery
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Daycare
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Care
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Kindergarten
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Teacher
                  </a>
                </ul>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Archives</h3>
                <ul className="categories">
                  <li>
                    <a href="#">
                      December 2018 <span>(30)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Novemmber 2018 <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      September 2018 <span>(6)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      August 2018 <span>(8)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>
            {/* END COL */}
          </div>
        </div>
      </section>

      <Footer />
      
    </>
  );
}

export default blogsingel;
