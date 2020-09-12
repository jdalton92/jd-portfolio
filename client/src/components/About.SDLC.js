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
          <>
            <h5 className="about-subheader-2">Planning, Design, Prototyping</h5>
            <ul className="about-block-content">
              <li>
                Successfully implement UI/UX redesign/optimisation in a
                delivering a modern student portal, as a Full Stack Engineer at{" "}
                <a href="https://campus.app">Campus</a>, utilising Angular9,
                TypeScript, HTML, and SASS/CSS.
              </li>
              <li>
                Directly contributed to building a bespoke prototype integrated
                CRM / database web application for the CBRE's Australia and New
                Zealand business (1000+ employees), in a business analyst role.
                Successfully delivered on 2-week sprints, understaking
                substantial UI/UX redesign to suit the business’ core needs.
              </li>
            </ul>

            <h5 className="about-subheader-2">
              Development, Testing, Deployment
            </h5>
            <ul className="about-block-content">
              <li>
                Contributing as part of the core development team at{" "}
                <a href="https://campus.app">Campus</a>, where I successfully
                contributed in the upgrade of the frontend codebase from
                AngularJS to Angular9, and backend features/improvements/bug
                fixes using Django/Celery/RabbitMQ/PostgreSQL and Docker.
                Further, I directly collaborate with DevOps engineers
                implementing CI/CD workflows utilising tools including Jira,
                Git, Sentry, as well as personally undertaking
                unit/integration/end-to-end testing on development,
                pre-production, and production environments.
              </li>
              <li>
                Sole creater/owner of bespoke responsive full stack single page
                web applications built with modern tech stack, personally
                maintained on DigitalOcean (AWS) servers using Ubuntu, Bash,
                OpenSSH, NginX, and LetsEncrypt. Deployment and maintenance
                based on CI/CD principals with debugging, linting and E2E
                testing using ESLint, Jest and Cypress. Refer to my{" "}
                <a href="/#portfolio">portfolio</a> below
              </li>
            </ul>
          </>
        </Fade>
      </div>
    </>
  );
};

export default SDLC;
