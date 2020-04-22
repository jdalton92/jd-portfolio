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
        </Fade>
      </div>
    </>
  );
};

export default Other;
