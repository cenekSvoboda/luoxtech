import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import PropTypes from "prop-types";
import LUOXtechIcon from "../../images/LUOXtech_Logo_GRAY_alfa1.svg";

const NavBar = ({ location,
                fileNameInHeader,
}) => {
  const isHome = location.pathname === "/";
  // const isFormatInfo = location.pathname === "/format-info";
  const isInstructions = location.pathname === "/instructions";
  // const isUpload = location.pathname === "/upload";
  const isAbout = location.pathname === "/about";
  return (
    <div className="container">
      {(fileNameInHeader !== "") ?
        <div style={{ width: "100%", height: "20px", display:"flex", justifyContent: "center", alignItems: "center" }}>
          <div className="fileNameInHeader">
            Filename: <b>{fileNameInHeader}</b>
          </div>
        </div>
        :
        <></>
      }
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1 className="text-light">
            <a className="" href="/">
              <img
                /* src={luoxIcon} */
                src={LUOXtechIcon}
                width="180"
                height="40"
                className="d-inline-block align-top me-2"
                alt="luox icon"
              />
              {/* <span className="text-lowercase">LUOXtech</span> */}
            </a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className={isHome ? "active" : ""} href="/">
                Home
              </a>
            </li>
            {/* <li>
            <a className={isFormatInfo ? "active" : ""} href="/format-info">
              Format instructions
            </a>
          </li> */}
            <li>
              <a className={isInstructions ? "active" : ""} href="/instructions">
                {/* <a className={isUpload ? "active" : ""} href="/upload"> */}
                {/* Upload spectrum and generate report */}
                {/* Choose spectral data (with instructions) */}
                Instructions
              </a>
            </li>
            <li>
              <a className={isAbout ? "active" : ""} href="/about">
                About
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>


    </div>
  );
};

NavBar.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  fileNameInHeader: PropTypes.string.isRequired,
};

export default NavBar;
