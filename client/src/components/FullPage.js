import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Landing from "./Landing";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const FullPage = () => {
  const anchors = ["home", "about", "portfolio", "contact"];
  return (
    <ReactFullpage
      scrollOverflow={true}
      paddingTop="25px"
      licenseKey={"1DF28CA2-C668452E-AED10A3B-E4A7A153"}
      anchors={anchors}
      normalScrollElements={
        ".portfolio-card-body, .portfolio-description, .portfolio-tech-stack, .form-message, .form-input"
      }
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#282c34", "#b3bbbb", "#94958B", "#B7B6C1"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ fullpageApi }) => (
        <div id="fullpage-wrapper">
          <Landing api={fullpageApi} />
          <About />
          <Portfolio />
          <Contact />
        </div>
      )}
    />
  );
};

export default FullPage;
