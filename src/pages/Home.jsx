import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Customers from "../components/Customers";
import gps from "../images/My project.png";
import cctv from "../images/cctv.png";
import fmb920 from "../images/gps-product-1.jpg";
import cctv_pro_1 from "../images/cctv-product-2.jpg";
import Loader from "../components/Loader";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import WhatsappButton from "../components/WhatsappButton";
import { Link } from "react-router-dom";

import "video-react/dist/video-react.css";
import { Player } from "video-react";
function Home() {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "We collaborate with smart and creative people to make your Life easy.",
  ];
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <Nav />
      {/* start video modal */}
      <div id="video" class="basic-2 video-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="image-container">
                <div class="video-wrapper">
                  <div
                    className="embed-responsive embed-responsive-16by9"
                    id="video"
                  >
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/6J8KD68wMKw?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div class="p-heading">We build digital experiences.</div>
            </div>
          </div>
        </div>
      </div>
      {/* end video */}

      <Customers />

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Services
            </h6>
            <h2 className="mt-2">What Solutions We Provide</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i>
                    <img style={{ width: "100px" }} src={gps} />
                  </i>
                </div>
                <h5 className="mb-3">GPS Technology</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i>
                    {" "}
                    <img style={{ width: "100px" }} src={cctv} />{" "}
                  </i>
                </div>
                <h5 className="mb-3">CCTV surveillance</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">Social Media Marketing</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">Email Marketing</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">PPC Advertising</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">App Development</h5>
                <p>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <a className="btn px-3 mt-auto mx-auto" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Portfolio Start */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Visit
            </h6>
            <h2 className="mt-2">Our products</h2>
          </div>
          <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className="btn px-3 pe-4 active" data-filter="*">
                  All
                </li>
                {/* <li className="btn px-3 pe-4" data-filter=".first">
                                    Design
                                </li>
                                <li className="btn px-3 pe-4" data-filter=".second">
                                    Development
                                </li> */}
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container">
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
              data-wow-delay="0.1s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  style={{ height: "380px" }}
                  src={fmb920}
                  alt=""
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-light"
                    href={fmb920}
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-plus fa-2x text-primary" />
                  </a>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2" />
                      {/* Web Design */}
                    </small>
                    <a className="h5 d-block text-white mt-1 mb-0" href="">
                      GPS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
              data-wow-delay="0.3s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  style={{ height: "380px" }}
                  src={cctv_pro_1}
                  alt=""
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-light"
                    href={cctv_pro_1}
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-plus fa-2x text-primary" />
                  </a>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2" />
                      {/* Web Design */}
                    </small>
                    <a className="h5 d-block text-white mt-1 mb-0" href="">
                      CCTV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
              data-wow-delay="0.6s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-3.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-light"
                    href="img/portfolio-3.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-plus fa-2x text-primary" />
                  </a>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2" />
                      Web Design
                    </small>
                    <a className="h5 d-block text-white mt-1 mb-0" href="">
                      Project Name
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
              data-wow-delay="0.1s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-4.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-light"
                    href="img/portfolio-4.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-plus fa-2x text-primary" />
                  </a>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2" />
                      Web Design
                    </small>
                    <a className="h5 d-block text-white mt-1 mb-0" href="">
                      Project Name
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
              data-wow-delay="0.3s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-5.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-light"
                    href="img/portfolio-5.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-plus fa-2x text-primary" />
                  </a>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2" />
                      Web Design
                    </small>
                    <a className="h5 d-block text-white mt-1 mb-0" href="">
                      Project Name
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
              data-wow-delay="0.6s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/portfolio-6.jpg"
                  alt=""
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-light"
                    href="img/portfolio-6.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-plus fa-2x text-primary" />
                  </a>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2" />
                      Web Design
                    </small>
                    <a className="h5 d-block text-white mt-1 mb-0" href="">
                      Project Name
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio End */}
      <WhatsappButton />
      <Footer />
    </>
  );
}
export default Loader(Home);
