import React from "react";
import "./styles/navigationbar.css";

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="#home" className="navbar-logo-link">
          jamesdalton.io
        </a>
      </div>
      <div className="navbar-links">
        <div className="navbar-item">
          <a href="#about">about</a>
        </div>
        <div className="navbar-item">
          <a href="#portfolio">portfolio</a>
        </div>
        <div className="navbar-item">
          <a href="#contact">contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
