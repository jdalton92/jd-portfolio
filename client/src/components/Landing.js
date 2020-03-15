import React from "react";
import ContactIcons from "./ContactIcons";
import "./styles/landing.css";

const Landing = ({ api }) => {
  return (
    <div className="section">
      <div className="landing-container">
        <div className="landing-header">
          <div className="landing-header-top">{`( ) => {`}</div>
          <div className="landing-header-middle desktop">
            {`jamesdalton.io`}
          </div>
          <div className="landing-header-bottom">{`}`}</div>
          <div className="landing-subheader">
            <b> fullstack web developer </b>
            <br />
            sydney, australia
          </div>
        </div>
        <div className="landing-icons">
          <ContactIcons />
        </div>
        <div className="arrow-container" onClick={() => api.moveSectionDown()}>
          <i className="arrow-down" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
