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
                        <img src="data:image/jpeg;base64,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" />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SMLqyMGW2fV_4kk_AlDOe8pvr111So9pnA&usqp=CAU" />
                      </div>
                      <div>
                        <img src="https://india.omnicomm-world.com/upload/iblock/49d/z65f8vvqr7476rdd0aho06ghlcczo86y/480%D1%85650-11.png" />
                      </div>
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

        {/* start gps 125 */}
        {/* <div className="accordion-item" style={{ marginTop: "2%" }}>
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

            </div>
          </div>
        </div> */}
        {/* start gps 125 */}
      </div>

      <WhatsappButton />
      <Footer />
    </>
  );
}
export default Loader(Sensore);
