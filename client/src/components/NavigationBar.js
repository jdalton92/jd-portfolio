import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/navigationbar.css";

const NavigationBar = () => {
  const history = useHistory();
  const hash = history.location.hash;
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="#home" className="navbar-logo-link">
          jamesdalton.io
        </a>
      </div>
      <div className="navbar-links">
        <div
          className={`${
            hash.includes("about") ? "active-section" : ""
          } navbar-item`}
        >
          <a href="#about">about</a>
        </div>
        <div
          className={`${
            hash.includes("portfolio") ? "active-section" : ""
          } navbar-item`}
        >
          <a href="#portfolio">portfolio</a>
        </div>
        <div
          className={`${
            hash.includes("contact") ? "active-section" : ""
          } navbar-item`}
        >
          <a href="#contact">contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
