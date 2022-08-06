import React, { useState } from "react";
import Education from "./About.Education";
import SkillSet from "./About.SkillSet";
import ProfessionalHistory from "./About.ProfessionalHistory";
import Other from "./About.Other";
import Slide from "react-reveal/Slide";
import "./styles/about.css";

const About = () => {
  const [content, setContent] = useState("professionalHistory");

  const getContent = () => {
    switch (content) {
      case "education":
        return <Education />;
      case "skillSet":
        return <SkillSet />;
      case "professionalHistory":
        return <ProfessionalHistory />;
      case "other":
        return <Other />;
    }
  };

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
                    content === "professionalHistory" ? "selected" : ""
                  }`}
                  onClick={() => setContent("professionalHistory")}
                >
                  Professional History
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
              <div className="about-right-content">{getContent()}</div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
