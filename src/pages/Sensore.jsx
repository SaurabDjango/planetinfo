import Loader from "../components/Loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import analog1 from "../images/green_analog.jpeg";
import digital1 from "../images/black_digital.jpeg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

function Sensore() {
  return (
    <>
      <div>
        <Nav />
      </div>

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
              <p className="product-title">Omnicomm Analog Fuel Sensor</p>
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
                        <img src={analog1} />
                        <p className="legend">Legend 1</p>
                      </div>
                      {/* <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/384/yu6t3gvvbnnx8htqnl0vzuh7gpi23zi0/480%D1%85650-15.png" />
                      </div>
                      <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/49d/z65f8vvqr7476rdd0aho06ghlcczo86y/480%D1%85650-11.png" />
                      </div> */}
                    </Carousel>
                  </div>
                  <div class="col-lg-6">
                    <div className="product-content">
                      <h2 className="product-title">
                        Omnicomm Analog Fuel Sensor
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
                          Ever since the inception of our firm in this nation,
                          we have been engrossed in offering with a capable and
                          richly tested assortment of Omnicomm Analog Fuel
                          Sensor .
                        </p>
                        <ul>
                          <li>
                            Brand: <span>Teltonika</span>
                          </li>
                          <li>
                            Screen Size:{" "}
                            <span>
                              2.5 inch, 3.5 inch, 4.3 inch, 6.5 inch, 7 inch
                            </span>
                          </li>
                          <li>
                            Usage: <span>Car, Truck, Bike, Auto</span>
                          </li>

                          <li>
                            Mobile Access: <span>Yes</span>
                          </li>

                          <li>
                            TypeTT: <span>Wired</span>
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
                        Teltonika FMB920 is compact and smart tracker with
                        Bluetooth connectivity, internal high gain GNSS and GSM
                        antennas and integrated backup battery. FMB920 is
                        designed for light vehicles tracking in applications
                        like insurance telematics, rental cars, recovery of
                        stolen cars, public safety services, delivery transport,
                        taxi and much more. Inputs/outputs extend device usage
                        scenarios. Digital input can be used for ignition, door
                        or alarm button status monitoring. Vehicle remote
                        immobilizing may be achieved using FMB920 digital
                        output.
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
                            <li>Live online tracking</li>
                            <li>Single view of all vehicle on online map</li>
                            <li>Replay of trip to analyze causes of delays</li>
                            <li>Analysis of every location data</li>
                            <li>Driver performance analysis</li>
                            <li>Vehicle event analysis</li>
                          </ul>
                        </div>
                      </div>
                      {/* features start */}

                      {/* Gps Specification */}
                      <div className="section-title position-relative mb-4 pb-2">
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
                      </div>
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

        {/* start digital sensor */}
        <div class="accordion-item" style={{ marginTop: "2%" }}>
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h2 className="product-title">Omnicomm Digital Fuel Sensor</h2>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
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
                        <img src={digital1} />
                        <p className="legend">Legend 1</p>
                      </div>
                      {/* <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/49d/z65f8vvqr7476rdd0aho06ghlcczo86y/480%D1%85650-11.png" />
                      </div> */}
                    </Carousel>
                  </div>
                  <div class="col-lg-6">
                    <div className="product-content">
                      <h2 className="product-title">
                        Omnicomm Digital Fuel Sensor
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
                          Ever since the inception of our firm in this nation,
                          we have been engrossed in offering with a capable and
                          richly tested assortment of Omnicomm Analog Fuel
                          Sensor .
                        </p>
                        <ul>
                          <li>
                            Brand: <span>Teltonika</span>
                          </li>
                          <li>
                            Screen Size:{" "}
                            <span>
                              2.5 inch, 3.5 inch, 4.3 inch, 6.5 inch, 7 inch
                            </span>
                          </li>
                          <li>
                            Usage: <span>Car, Truck, Bike, Auto</span>
                          </li>

                          <li>
                            Mobile Access: <span>Yes</span>
                          </li>

                          <li>
                            TypeTT: <span>Wired</span>
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
                        Teltonika FMB920 is compact and smart tracker with
                        Bluetooth connectivity, internal high gain GNSS and GSM
                        antennas and integrated backup battery. FMB920 is
                        designed for light vehicles tracking in applications
                        like insurance telematics, rental cars, recovery of
                        stolen cars, public safety services, delivery transport,
                        taxi and much more. Inputs/outputs extend device usage
                        scenarios. Digital input can be used for ignition, door
                        or alarm button status monitoring. Vehicle remote
                        immobilizing may be achieved using FMB920 digital
                        output.
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
                            <li>Live online tracking</li>
                            <li>Single view of all vehicle on online map</li>
                            <li>Replay of trip to analyze causes of delays</li>
                            <li>Analysis of every location data</li>
                            <li>Driver performance analysis</li>
                            <li>Vehicle event analysis</li>
                          </ul>
                        </div>
                      </div>
                      {/* features start */}

                      {/* Gps Specification */}
                      <div className="section-title position-relative mb-4 pb-2">
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
                      </div>
                      {/* Gps Specification */}
                    </div>
                  </div>
                </div>
              </div>

              {/* End section */}
            </div>
          </div>
        </div>
        {/* End digital sensor */}

      </div>

      <WhatsappButton />
      <Footer />
    </>
  );
}
export default Loader(Sensore);
