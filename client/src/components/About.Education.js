import React from "react";

const Education = () => {
  return (
    <>
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
            A Tour of C++ (2nd Edition) - Bjarne Stroustrup <i>(in progress)</i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Education;
