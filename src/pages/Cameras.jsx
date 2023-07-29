import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import WhatsappButton from "../components/WhatsappButton";
import { Carousel } from "react-responsive-carousel";
import cam1 from "../images/cctv_images/cam1.jpg";
import cam2 from "../images/cctv_images/cam2.jpg";
import cam3 from "../images/cctv_images/cam3.jpg";
import cam4 from "../images/cctv_images/cam4.jpg";
import cam5 from "../images/cctv_images/cam5.jpg";
import cam6 from "../images/cctv_images/cam6.jpg";
import cam7 from "../images/cctv_images/cam7.jpg";
import cam8 from "../images/cctv_images/cam8.jpg";
import cam9 from "../images/cctv_images/cam9.jpg";

function Cameras() {
  return (
    <>
      <Nav />

      <div
        class="accordion container-xxl mb-5"
        id="accordionExample"
        style={{ paddingTop: "7%", borderRadius: "50px" }}
      >
        {/* start Analog sensor */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="product-title">Digital Cameras</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container-xxl mb-5">
                <div class="row">
                  <div class="col col-lg-6">
                    <Carousel
                      autoPlay={true}
                      showArrows={true}
                      emulateTouch={true}
                    >
                      <div>
                        <img src={cam1} />
                      </div>
                      <div>
                        <img src={cam2} />
                      </div>
                      <div>
                        <img src={cam3} />
                      </div>
                      <div>
                        <img src={cam4} />
                      </div>
                      <div>
                        <img src={cam5} />
                      </div>
                      <div>
                        <img src={cam6} />
                      </div>
                      <div>
                        <img src={cam7} />
                      </div>
                      <div>
                        <img src={cam8} />
                      </div>
                      <div>
                        <img src={cam9} />
                      </div>
                    </Carousel>
                  </div>
                  <div class="col-lg-6">
                    <div className="product-content">
                      <h2 className="product-title">
                        All types of digital cameras
                      </h2>
                      <div className="product-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                        <span>4.7</span>
                      </div>
                      <div className="product-detail">
                        <h2>about this item: </h2>
                        <p>
                          We test and rate scores of cameras and lenses each
                          year, from pocket-friendly models to high-end medium
                          format systems. Here's everything you need to know to
                          pick the best digital camera.{" "}
                        </p>
                        <ul>
                          {/* <li>
                            Brand: <span>Teltonika</span>
                          </li>
                          <li>
                            Screen Size:{" "}
                            <span>
                              2.5 inch, 3.5 inch, 4.3 inch, 6.5 inch, 7 inch
                            </span>
                          </li> */}
                          <li>
                            Usage: <span>Home, Office, Car, Truck,</span>
                          </li>

                          <li>
                            Mobile Access: <span>Yes</span>
                          </li>

                          <li>
                            Type: <span>Wire-less </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-xxl py-5">
                <div className="container px-lg-5">
                  <div className="row g-5">
                    <div className="col-lg wow fadeInUp" data-wow-delay="0.1s">
                      <div className="section-title position-relative mb-4 pb-2">
                        <h2 className="mt-2">Detailed description</h2>
                      </div>
                      <p className="mb-4" style={{ textAlign: "-moz-initial" }}>
                        Cameras are being used widely today for various reasons.
                        The picture taken from a smartphone may be good but not
                        the same as taken with a good quality camcorder. Whether
                        you are a beginner or professional, you can opt for DSLR
                        ones and get more confident in your photography skills.
                        One of the best things to check online is the latest
                        camcorder and compare them with different models from
                        the comfort of your home. DSLR comes with features like
                        high shutter speed, a large sensor area, better
                        sensitivity to light, the use of different lenses for
                        different purposes, and more reasons that allure
                        photographers to buy them online. They are available in
                        colours like black, blue, and silver. They come with
                        sensor types CCD, CMOS, MOS, and BSI CMOS. You can
                        explore options like Canon EOS 15000 DSLR, Canon EOS
                        3000 DSLR, and more as they come with Wi-Fi connectivity
                        and 1080p on 30fps video recording. Check and compare
                        prices to make an informed decision. Check out various
                        brands available online such as Canon, Nikon, Sony,
                        Panasonic, Samsung, etc. So, hurry up and add a camera
                        to your shopping cart, place your order by making
                        payment through secured gateways and have them delivered
                        to your doorstep hassle-free.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-xxl py-5" style={{ marginTop: "-8%" }}>
                <div className="container px-lg-5">
                  <div className="row g-5">
                    <div className="col-lg wow fadeInUp" data-wow-delay="0.1s">
                      <div className="section-title position-relative mb-4 pb-2">
                        <h2 className="mt-2">Feature:</h2>
                      </div>
                      {/* features start */}
                      <div className="span12">
                        <div className="inside">
                          <ul
                            className="entry-content"
                            style={{ listStyleType: "square" }}
                          >
                            <li>Removable Memory Card</li>
                            <li>Autofocus</li>
                            <li>Face Recognition</li>
                            <li>Analysis of every location data</li>
                            <li>Shooting Modes</li>
                            <li>Touchscreen & AutoCorrect</li>
                          </ul>
                        </div>
                      </div>
                      {/* features start */}

                      {/* Gps Specification */}
                      {/* <div className="section-title position-relative mb-4 pb-2">
                        <h2 className="mt-2">GPS Specification:</h2>
                      </div>

                      <div className="span12">
                        <div className="inside">
                          <ul
                            className="entry-content"
                            style={{ listStyleType: "square" }}
                          >
                            <li>MTK high sensitivity chip</li>
                            <li>Frequency : L1,1575A2MHz C/A code</li>
                            <li>GPS channel : 66</li>
                            <li>Location accuracy : less then 10 meters</li>
                            <li>Tracking sensitivity : -165dBm</li>
                            <li>Acquisition sensitivity : -148dBm</li>
                            <li>
                              TTFF (open sky) : Avg. hot starts lsec , Avg. cold
                              starts32sec
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* Gps Specification */}
                    </div>
                  </div>
                </div>
              </div>

              {/* End section */}
            </div>
          </div>
        </div>
        {/* End Analog sensor */}
      </div>

      <WhatsappButton />
      <Footer />
    </>
  );
}

export default Loader(Cameras);
