import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <div className="section about-section">
      <div className="about-container">
        <div className="header about-header">
          <h3>ABOUT ME</h3>
        </div>
        <div className="about-slogan">
          I am a self-motivated, self-taught developer with technical skills
          across a full stack of technologies, and experience across the whole
          software development lifecycle
        </div>
        <div className="about-left">
          <div className="about-block">
            <h4 className="about-subheader">EDUCATION</h4>
            <h5 className="about-subheader-2">University of Sydney | 2015</h5>
            <ul className="about-block-content">
              <li className="about-li">Bachelor Engineering / Finance</li>
              <li className="about-li">Class 1 Honours</li>
            </ul>
            <h5 className="about-subheader-2">St Ignatius' College | 2010</h5>
            <ul className="about-block-content">
              <li className="about-li">ATAR 99.05</li>
            </ul>
          </div>
          <div className="about-block">
            <h4 className="about-subheader">CONTINUED EDUCATION</h4>
            <h5 className="about-subheader-2">MOOCs</h5>
            <ul className="about-block-content">
              <li className="about-li">
                University of Helsinki: Deep Dive into Modern Web Development
              </li>
              <li className="about-li">
                Harvard: CS50x Introduction to Computer Science
              </li>
              <li className="about-li">
                Stanford: Machine Learning <i>(in progress)</i>
              </li>
            </ul>
            <h5 className="about-subheader-2">Books</h5>
            <ul className="about-block-content">
              <li className="about-li">
                Python Crash Course (2nd Edition) – Eric Matthews
              </li>
              <li className="about-li">
                A Tour of C++ (2nd Edition) - Bjarne Stroustrup{" "}
                <i>(in progress)</i>
              </li>
            </ul>
          </div>
          <div className="about-block">
            <h4 className="about-subheader">SKILL SET</h4>
            <div className="about-subheader-3">
              1 star (beginer) to 5 star (expert)
            </div>
            <div className="about-block about-table-container">
              <table className="about-table-left">
                <tbody className="about-block-content">
                  <tr>
                    <td>HTML</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>jQuery</td>
                    <td>★★☆☆☆</td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>Node</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>Python (Flask &amp; Django)</td>
                    <td>★★☆☆☆</td>
                  </tr>
                </tbody>
              </table>
              <table className="about-table-right">
                <tbody className="about-block-content">
                  <tr>
                    <td>C</td>
                    <td>★☆☆☆☆</td>
                  </tr>
                  <tr>
                    <td>C++</td>
                    <td>★☆☆☆☆</td>
                  </tr>
                  <tr>
                    <td>VBA</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>SQL</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>MongoDB</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td>Git</td>
                    <td>★★★☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-block sdlc-contect">
            <h4 className="about-subheader">
              SOFTWARE DEVELOPMENT LIFECYCLE EXPERIENCE
            </h4>
            <h5 className="about-subheader">Planning, Design, Prototyping</h5>
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
                10 credits in University of Helsinki: Deep Dive into Modern Web
                Development achieving fundamental understanding/experience in
                debugging, linting and E2E testing across a modern tech stack
                with ESLint, Jest and Cypress
              </li>
              <li>
                Sole creater/owner of bespoke responsive full stack single page
                web applications built with modern tech stack, deploying via
                Heroku, Digital Ocean, and AWS. Refer
                <a href="/#portfolio"> portfolio</a>
              </li>
            </ul>
          </div>
          <div className="about-block">
            <h4 className="about-subheader">PROFESSIONAL HISTORY</h4>
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
          </div>
          <div className="about-block">
            <h4 className="about-subheader">OTHER</h4>
            <ul className="about-block-content">
              <li className="about-li">
                Active participant: Github, StackOverflow, LeetCode,
                reddit.com/r/learnprogramming
              </li>
              <li className="about-li">
                Interests: Surfing/surfboard making, technology, fitness, beer
                brewing, travel, music, film
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
