import Loader from "../components/Loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from "../images/cctv.png";
import WhatsappButton from "../components/WhatsappButton";

function GpsCaraSoul() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div class="container-xxl mb-5" style={{ paddingTop: "5%" }}>
        <div class="row">
          <div class="col col-lg-6">
            <Carousel>
              <div style={{ marginTop: "5%" }}>
                <img src="https://www.getic.com/images/catalogue/1348/fmb920_01-medium.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="https://www.getic.com/images/catalogue/1348/fmb920_02-medium.jpg" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="https://www.getic.com/images/catalogue/1348/fmb920_03-medium.jpg" />
                <p className="legend">Legend 2</p>
              </div>
            </Carousel>
          </div>
          <div class="col-lg-6">
            <div className="product-content">
              <h2 className="product-title">FMB 920</h2>
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
                  Compact and smart tracker with Bluetooth connectivity,
                  internal High Gain GNSS and GSM antennas and integrated backup
                  battery
                </p>
                <ul>
                  <li>
                    Brand: <span>Teltonika</span>
                  </li>
                  <li>
                    Manufacturer part number: <span>FMB920</span>
                  </li>
                  <li>
                    EAN: <span>4779027311753</span>
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
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="section-title position-relative mb-4 pb-2">
                <h2 className="mt-2">Detailed description</h2>
              </div>
              <p className="mb-4" style={{ textAlign: "-moz-initial" }}>
                Teltonika FMB920 is compact and smart tracker with Bluetooth
                connectivity, internal high gain GNSS and GSM antennas and
                integrated backup battery. FMB920 is designed for light vehicles
                tracking in applications like insurance telematics, rental cars,
                recovery of stolen cars, public safety services, delivery
                transport, taxi and much more. Inputs/outputs extend device
                usage scenarios. Digital input can be used for ignition, door or
                alarm button status monitoring. Vehicle remote immobilizing may
                be achieved using FMB920 digital output.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid wow zoomIn"
                data-wow-delay="0.5s"
                src="https://www.getic.com/images/catalogue/description/126/fmb920-5f291f6bc4e2c.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      <WhatsappButton />
      <Footer />
    </>
  );
}
export default Loader(GpsCaraSoul);
