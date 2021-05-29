import React, { useEffect } from "react";
import FullPage from "./components/FullPage";
import NavigationBar from "./components/NavigationBar";
import Notification from "./components/Notification";
import ReactGA from "react-ga";
import "./components/styles/app.css";

const App = () => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("UA-158975814-3");
  }
  const initGA = () => {
    ReactGA.set({ page: window.location.pathname + window.location.hash });
    ReactGA.pageview(
      window.location.pathname + window.location.hash + window.location.search
    );
  };
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.addEventListener("hashchange", initGA);
    }
    return () => {
      window.removeEventListener("hashchange", initGA);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname, window.location.hash]);

  return (
    <>
      <NavigationBar />
      <Notification />
      <FullPage />
    </>
  );
};

export default App;
