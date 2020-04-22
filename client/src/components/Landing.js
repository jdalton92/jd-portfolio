import React from "react";
import ContactIcons from "./ContactIcons";
import Fade from "react-reveal/Fade";
import "./styles/landing.css";

const Landing = ({ api }) => {
  return (
    <div className="section">
      <div className="background-image" />
      <div className="landing-container">
        <div className="landing-header">
          <Fade>
            <div className="landing-header-top">{`( ) => {`}</div>
          </Fade>
          <Fade top>
            <div className="landing-header-middle desktop">
              {`jamesdalton.io`}
            </div>
          </Fade>
          <Fade>
            <div className="landing-header-bottom">{`}`}</div>
          </Fade>
          <Fade bottom>
            <div className="landing-subheader">
              <b> fullstack web developer </b>
              <br />
              sydney, australia
            </div>
          </Fade>
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
