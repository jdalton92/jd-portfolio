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
          <>
            <h5 className="about-subheader-2">Pathify | Jul 2020 - Current</h5>
            <ul className="about-block-content">
              <li>Software Engineer | Full Stack</li>
            </ul>
            <h5 className="about-subheader-2">CBRE | Apr 2017 - Jul 2020</h5>
            <ul className="about-block-content">
              <li>
                Financial Analyst | Structured Transactions &amp; Advisory
              </li>
            </ul>
            <h5 className="about-subheader-2">
              Lendlease | Jan 2016 - Apr 2017
            </h5>
            <ul className="about-block-content">
              <li>Site Engineer</li>
            </ul>
            <h5 className="about-subheader-2">Talis Civil | 2014 - 2015</h5>
            <ul className="about-block-content">
              <li>Undergraduate Engineer</li>
            </ul>
          </>
        </Fade>
      </div>
    </>
  );
};

export default ProfessionalHistory;
