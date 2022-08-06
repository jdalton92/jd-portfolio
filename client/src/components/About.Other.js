import React from "react";
import Fade from "react-reveal/Fade";

const Other = () => {
  return (
    <>
      <div className="about-block">
        <Fade top>
          <h4 className="about-subheader">OTHER</h4>
        </Fade>
        <Fade bottom>
          <>
            <h5 className="about-subheader-2">Active User</h5>
            <ul className="about-block-content">
              <li>
                Github, StackOverflow, LeetCode, reddit.com/r/learnprogramming
              </li>
            </ul>
            <h5 className="about-subheader-2">Interests</h5>
            <ul className="about-block-content">
              <li>
                Surfing/surfboard shaping, beer brewing, travel, fitness, music,
                film
              </li>
            </ul>
          </>
        </Fade>
      </div>
    </>
  );
};

export default Other;
