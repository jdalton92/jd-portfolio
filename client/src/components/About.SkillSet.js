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
            <SkillSetSkill name={"HTML"} rating={65} />
            <SkillSetSkill name={"SASS/CSS"} rating={65} />
            <SkillSetSkill name={"JavaScript"} rating={60} />
            <SkillSetSkill name={"React"} rating={60} />
            <SkillSetSkill name={"TypeScript"} rating={50} />
            <SkillSetSkill name={"Angular"} rating={40} />
            <SkillSetSkill name={"Node"} rating={60} />
            <SkillSetSkill name={"Python"} rating={40} />
            <SkillSetSkill name={"Django"} rating={40} />
            <SkillSetSkill name={"SQL"} rating={35} />
            <SkillSetSkill name={"MongoDB"} rating={50} />
            <SkillSetSkill name={"Docker"} rating={20} />
            <SkillSetSkill name={"C"} rating={20} />
            <SkillSetSkill name={"C++"} rating={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillset;
