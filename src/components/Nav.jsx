import React, { useState } from "react";
import Model from "./videoModal";
import { Link } from "react-router-dom";
import logo from "../images/company_logo-removebg-preview.png";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the video modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the video modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            {/* <h1 className="m-0">
              <i className="fa fa-search me-2" />
              SEO<span className="fs-5">Master</span>
            </h1> */}
            <img src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to={"/"} className="nav-item nav-link active">
                Home
              </Link>
              <Link to={"/about"} className="nav-item nav-link active">
                About
              </Link>
              <Link to={"/contact"} className="nav-item nav-link active">
                contact
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <div className="dropdown-menu m-0">
                  <Link to={"/gps"} className="dropdown-item">
                    GPS Devices{" "}
                  </Link>

                  <Link to={"/sensor"} className="dropdown-item">
                    Fuel sensor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
