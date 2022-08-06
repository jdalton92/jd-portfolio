import React from "react";
import Fade from "react-reveal/Fade";

const Skillset = () => {
  return (
    <>
      <div className="about-block">
        <Fade top>
          <h4 className="about-subheader">SKILL SET</h4>
        </Fade>
        <Fade bottom>
          <>
            <ul className="about-block-content">
              <li>
                <b>Languages/tools:</b> TypeScript/JavaScript, Python, HTML,
                CSS/SASS, Docker, Git, VBA
              </li>
              <li>
                <b>Frameworks/libraries:</b> React, Angular, Node, Django
              </li>
              <li>
                <b>Database:</b> MongoDB, PostgreSQL
              </li>
              <li>
                <b>Other:</b> Motivation and willingness to expand technical
                skillset in any technology
              </li>
            </ul>
          </>
        </Fade>
      </div>
    </>
  );
};

export default Skillset;
