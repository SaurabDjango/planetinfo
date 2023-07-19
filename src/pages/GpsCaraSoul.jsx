import styles from "../styles.css";
import Loader from "../components/Loader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from "../images/cctv.png";
import WhatsappButton from "../components/WhatsappButton";
import Gps920 from "../components/Gps920";

function GpsCaraSoul() {
  return (
    <>
      <div>
        <Nav />
      </div>
      {/* start gps 920 */}
      <div
        class="accordion container-xxl mb-5"
        id="accordionExample"
        style={{ paddingTop: "7%", borderRadius: "50px" }}
      >
        <Gps920 />
      </div>
      ;{/* End gps 920 */}
      <WhatsappButton />
      <Footer />
    </>
  );
}
export default Loader(GpsCaraSoul);
