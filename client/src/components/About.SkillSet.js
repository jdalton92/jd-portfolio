import React from "react";
import SkillSetSkill from "./About.SkillSet.Skill";
import Fade from "react-reveal/Fade";

const Skillset = () => {
  return (
    <>
      <div className="about-block">
        <Fade top>
          <h4 className="about-subheader">SKILL SET</h4>
        </Fade>
        <div className="skill-body-wrapper">
          <div className="skill-table">
            <SkillSetSkill name={"HTML"} rating={80} />
            <SkillSetSkill name={"SASS/CSS"} rating={70} />
            <SkillSetSkill name={"Javascript"} rating={70} />
            <SkillSetSkill name={"Typescript"} rating={70} />
            <SkillSetSkill name={"React"} rating={60} />
            <SkillSetSkill name={"Angular"} rating={70} />
            <SkillSetSkill name={"Node"} rating={50} />
            <SkillSetSkill name={"Python"} rating={60} />
            <SkillSetSkill name={"Django"} rating={70} />
            <SkillSetSkill name={"Postgres"} rating={50} />
            <SkillSetSkill name={"MongoDB"} rating={40} />
            <SkillSetSkill name={"Docker"} rating={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillset;
