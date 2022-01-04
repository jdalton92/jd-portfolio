import React, { useState } from "react";
import Education from "./About.Education";
import SkillSet from "./About.SkillSet";
import SDLC from "./About.SDLC";
import ProfessionalHistory from "./About.ProfessionalHistory";
import Other from "./About.Other";
import Slide from "react-reveal/Slide";
import "./styles/about.css";

const About = () => {
  const [content, setContent] = useState("sldc");

  let aboutInfo;
  if (content === "education") {
    aboutInfo = <Education />;
  } else if (content === "skillSet") {
    aboutInfo = <SkillSet />;
  } else if (content === "sldc") {
    aboutInfo = <SDLC />;
  } else if (content === "professionalHistory") {
    aboutInfo = <ProfessionalHistory />;
  } else if (content === "other") {
    aboutInfo = <Other />;
  }

  return (
    <div className="section about-section">
      <div className="about-container">
        <div className="header about-header">
          <h3>ABOUT ME</h3>
        </div>
        <div className="about-slogan">
          Self-motivated web developer with demonstrable technical proficiency
          across modern frontend/backend technologies, and experience across the
          whole software development lifecycle
        </div>
        <div className="about-body">
          <div className="about-left">
            <Slide left cascade>
              <div className="about-nav">
                <div
                  className={`about-nav-item ${
                    content === "sldc" ? "selected" : ""
                  }`}
                  onClick={() => setContent("sldc")}
                >
                  SDLC Experience
                </div>
                <div
                  className={`about-nav-item ${
                    content === "skillSet" ? "selected" : ""
                  }`}
                  onClick={() => setContent("skillSet")}
                >
                  Skill Set
                </div>
                <div
                  className={`about-nav-item ${
                    content === "professionalHistory" ? "selected" : ""
                  }`}
                  onClick={() => setContent("professionalHistory")}
                >
                  Professional History
                </div>
                <div
                  className={`about-nav-item ${
                    content === "education" ? "selected" : ""
                  }`}
                  onClick={() => setContent("education")}
                >
                  Education
                </div>
                <div
                  className={`about-nav-item ${
                    content === "other" ? "selected" : ""
                  }`}
                  onClick={() => setContent("other")}
                >
                  Other
                </div>
              </div>
            </Slide>
          </div>
          <Slide right>
            <div className="about-right">
              <div className="about-right-content">{aboutInfo}</div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
