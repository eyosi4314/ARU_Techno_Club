import React from 'react'

function section10() {
  return (
    <>
      <section className="ftco-gallery">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_1.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{
                  backgroundImage: `url(${img("course-1.jpg")})`,
                }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_2.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: `url(${img("image_2.jpg")})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_3.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: `url(${img("image_3.jpg")})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a
                href={img("image_4.jpg")}
                className="gallery image-popup img d-flex align-items-center"
                style={{ backgroundImage: `url(${img("image_4.jpg")})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-instagram" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default section10
