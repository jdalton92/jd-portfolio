import React from "react";
import Fade from "react-reveal/Fade";

const SDLC = () => {
  return (
    <>
      <div className="about-block sdlc-contect">
        <Fade top>
          <h4 className="about-subheader">
            SOFTWARE DEVELOPMENT LIFECYCLE EXPERIENCE
          </h4>
        </Fade>
        <Fade bottom>
          <h5 className="about-subheader-2">Planning, Design, Prototyping</h5>
          <ul className="about-block-content">
            <li>
              Directly contributed to building a bespoke prototype integrated
              CRM / database web application for the CBRE's Australia and New
              Zealand business (1000+ employees)
            </li>
            <li>
              Gained insight into large-scale commercial software development
              and worked directly with in house softwar developers in created
              detailed user stories, and testing user scripts
            </li>
            <li>
              Successfully delivered on 2-week sprints cycles, understaking
              substantial UI/UX redesign to suit the business’ core needs
            </li>
          </ul>

          <h5 className="about-subheader-2">
            Development, Testing, Deployment
          </h5>
          <ul className="about-block-content">
            <li>
              8 credits in University of Helsinki: Deep Dive into Modern Web
              Development achieving fundamental understanding/experience in
              debugging, linting and E2E testing across a modern tech stack with
              ESLint, Jest and Cypress
            </li>
            <li>
              Sole creater/owner of bespoke responsive full stack single page
              web applications built with modern tech stack, deploying via
              Heroku, Digital Ocean, and AWS. Refer to my{" "}
              <a href="/#portfolio">portfolio</a> below
            </li>
          </ul>
        </Fade>
      </div>
    </>
  );
};

export default SDLC;
