import React from "react";
// Optional. When using scrollOverflow:true
// import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import Landing from "./Landing";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const FullPage = () => {
  const anchors = ["home", "about", "portfolio", "contact"];
  return (
    <ReactFullpage
      paddingTop="25px"
      licenseKey={"1DF28CA2-C668452E-AED10A3B-E4A7A153"}
      anchors={anchors}
      normalScrollElements={
        ".about-right-content, .portfolio-description, .portfolio-tech-stack, .form-message, .form-input"
      }
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#282c34", "#282c34", "#94958B", "#B7B6C1"]}
      render={({ fullpageApi }) => (
        <>
          <Landing api={fullpageApi} />
          <About api={fullpageApi} />
          <Portfolio />
          <Contact />
        </>
      )}
    />
  );
};

export default FullPage;
