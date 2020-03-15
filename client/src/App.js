import React from "react";
import FullPage from "./components/FullPage";
import NavigationBar from "./components/NavigationBar";
import Notification from "./components/Notification";
import ReactGA from "react-ga";
import "./components/styles/app.css";

const App = () => {
  ReactGA.initialize("UA-158975814-3");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <NavigationBar />
      <Notification />
      <FullPage />
    </>
  );
};

export default App;
