import React from "react"; // Don't forget to import React
import gps from "../images/cctv.png";
import com1 from "../images/com1.jpeg";
import com2 from "../images/com2.jpeg";
import com3 from "../images/com3.jpeg";
import com4 from "../images/com4.jpeg";
import com5 from "../images/com5.jpeg";
import com6 from "../images/com6.jpeg";
import com7 from "../images/com7.jpeg";
import com_8 from "../images/com_8.png";
import styles from "../styles.css";

export default function Customers() {
  return (
    <>
      {/* Testimonial Start */}
      <div className="container h-100 " style={{ paddingTop: "2%" }}>
        <div className="row align-items-center h-100">
          <div className="container rounded">
            <h1 className="text-center">Our trusted customers</h1>
            <div className="slider">
              {/* <div className="logos">
                <li>
                  <img
                    src={gps}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={gps}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>
              </div> */}
              <div className="logos" style={{ display: "flex" }}>
                <li>
                  <img
                    src={com1}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={com2}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={com3}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={com4}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={com5}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={com6}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={com7}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>

                <li>
                  <img
                    src={com_8}
                    alt="GPS Logo"
                    style={{ height: "200px", width: "300px" }}
                  />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}
