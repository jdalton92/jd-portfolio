import React from "react";
import Fade from "react-reveal/Fade";

const ProfessionalHistory = () => {
  return (
    <>
      <div className="about-block">
        <Fade top>
          <h4 className="about-subheader">PROFESSIONAL HISTORY</h4>
        </Fade>
        <Fade bottom>
          <h5 className="about-subheader-2">CBRE | 2017 - Current</h5>
          <ul className="about-block-content">
            <li>
              Financial Analyst (Manager) | Structured Transactions &amp;
              Advisory
            </li>
            <li>Analyst | Advisory &amp; Transactions</li>
          </ul>
          <h5 className="about-subheader-2">Lendlease | 2016 - 2017</h5>
          <ul className="about-block-content">
            <li>Site Engineer</li>
          </ul>
          <h5 className="about-subheader-2">Talis Civil | 2014 - 2015</h5>
          <ul className="about-block-content">
            <li>Undergraduate Engineer</li>
          </ul>
        </Fade>
      </div>
    </>
  );
};

export default ProfessionalHistory;
