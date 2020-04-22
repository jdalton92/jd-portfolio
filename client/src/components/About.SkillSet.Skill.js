import React from "react";
import Slide from "react-reveal/Slide";

const SkillSetSkill = ({ name, rating }) => {
  return (
    <>
      <div className="skill-bar">
        <div className="skill-name">{name}</div>
        <div className="skill-rating-background">
          <Slide left>
            <div className="skill-rating" style={{ width: `${rating}%` }} />
          </Slide>
          <div className="skill-percent">{rating}%</div>
        </div>
      </div>
    </>
  );
};

export default SkillSetSkill;
