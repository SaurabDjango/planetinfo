import Loader from "../components/Loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from "../images/cctv.png";
import WhatsappButton from "../components/WhatsappButton";
import fuel1 from "../images/fuel1.png";

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
                        <img src="https://india.omnicomm-world.com/upload/iblock/21f/pe1imx9r6nbdofai4ug1gn3l0rug9zzv/480%D1%85650-13.png" />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/384/yu6t3gvvbnnx8htqnl0vzuh7gpi23zi0/480%D1%85650-15.png" />
                      </div>
                      <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/49d/z65f8vvqr7476rdd0aho06ghlcczo86y/480%D1%85650-11.png" />
                      </div>
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
              <h2 className="product-title">Omnicomm Analog Fuel Sensor</h2>
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
                        <img src="https://india.omnicomm-world.com/upload/iblock/21f/pe1imx9r6nbdofai4ug1gn3l0rug9zzv/480%D1%85650-13.png" />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/384/yu6t3gvvbnnx8htqnl0vzuh7gpi23zi0/480%D1%85650-15.png" />
                      </div>
                      <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/49d/z65f8vvqr7476rdd0aho06ghlcczo86y/480%D1%85650-11.png" />
                      </div>
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
        {/* End digital sensor */}

        {/* start gps 125 */}
        <div className="accordion-item" style={{ marginTop: "2%" }}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h2 className="product-title">FMB 125</h2>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div class="container-xxl mb-5">
                <div class="row">
                  <div class="col col-lg-6">
                    <Carousel>
                      <div>
                        <img src="https://gpsm.ua/image/cache/catalog/fmb125/fmb125_9-700x700.jpg" />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src="https://gpsm.ua/image/cache/catalog/fmb125/fmb125_7-700x700.jpg" />
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src="https://gpsm.ua/image/cache/catalog/fmb125/fmb125-700x700.jpg" />
                        <p className="legend">Legend 2</p>
                      </div>

                      <div>
                        <img src="https://gpsm.ua/image/cache/catalog/fmb125/fmb125_8-700x700.jpg" />
                        <p className="legend">Legend 2</p>
                      </div>

                      <div>
                        <img src="https://gpsm.ua/image/cache/catalog/fmb125/fmb125_6-700x700.jpg" />
                        <p className="legend">Legend 2</p>
                      </div>

                      <div>
                        <img src="https://gpsm.ua/image/cache/catalog/fmb125/fmb125_10-700x700.jpg" />
                        <p className="legend">Legend 2</p>
                      </div>

                      <div>
                        <img src="https://gpsm.ua/image/cache/catalog/fmb125/fmb125_2-700x700.jpg" />
                        <p className="legend">Legend 2</p>
                      </div>
                    </Carousel>
                  </div>
                  <div class="col-lg-6">
                    <div className="product-content">
                      <h2 className="product-title">FMB 125</h2>
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
                          FMB125 tracker can work with devices such as fuel
                          sensors (LLS), RFID readers, Garmin navigation
                          systems, via RS232 and RS485 interfaces. Connection of
                          CAN adapters is possible. Supports Bluetooth, has a
                          backup battery.
                        </p>
                        <p>
                          FMB125 belongs to the most reliable car tracking
                          devices, which is provided by the new generation of
                          GSM / GNSS modules and the ability to support 2 SIM
                          cards. The tracker will remain online, even if one of
                          them does not work, and in roaming mode, a dual SIM
                          card will help save money.
                        </p>
                        <ul>
                          <li>
                            Brand: <span>Teltonika</span>
                          </li>
                          <li>
                            Manufacturer part number: <span>FMB125</span>
                          </li>
                          <li>
                            EAN: <span>4779027312095</span>
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
                    <div
                      className="col-lg-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="section-title position-relative mb-4 pb-2">
                        <h2 className="mt-2">Detailed description</h2>
                      </div>
                      <p className="mb-4" style={{ textAlign: "-moz-initial" }}>
                        High sensitivity. Fast cold and hot start, which allows
                        you to count on the most accurate and simple trip
                        tracking. Support for 3 modes of operation - "home
                        region", "roaming" and "unknown", blacklist of
                        operators. Playback is carried out online, constant
                        communication with the server. There are time
                        synchronization modes if there is no signal, and a GPRS
                        connection algorithm in order to save traffic. Very
                        compact and easy to install and manage tracker, while
                        smart collection of information based on distance, time,
                        speed data. Control of the start and end of movement,
                        detection of failures and excessive idling. It is
                        possible to receive information from CAN-buses of more
                        than 1800 models of transport: cars and trucks, buses,
                        agricultural vehicles. Support for Bluetooth 4.0 + LE,
                        so you can connect a headset, temperature sensors,
                        humidity and others. Various options for built-in
                        scenarios: overspeeding, which guarantees the safety of
                        the driver and prevents the accrual of fines,
                        identification of a person behind the wheel,
                        auto-geozone, immobilizer, towing detection, fuel
                        consumption calculation, GSM signal blocking, accident
                        detection.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img
                        className="img-fluid wow zoomIn"
                        data-wow-delay="0.5s"
                        src="https://www.getic.com/images/catalogue/description/116/fmb120-5f2814866d47d.jpeg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End section */}
            </div>
          </div>
        </div>

        {/* End gps 125 */}
      </div>

      <WhatsappButton />
      <Footer />
    </>
  );
}
export default Loader(Sensore);
