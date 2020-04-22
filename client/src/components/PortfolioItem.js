import React, { useState, useContext } from "react";
import PortfolioContent from "./PortfolioContent";
import NotificationContext from "../context/NotificationContext";

const PortfolioItem = ({ data }) => {
  const { setNotification } = useContext(NotificationContext);
  const [view, setView] = useState("image");

  const alert = (e) => {
    e.preventDefault();
    setNotification("Nothing happened");
  };

  return (
    <div className="slide">
      <div className="portfolio-item-container">
        <div className="portfolio-card">
          <div className="portfolio-card-navbar">
            <div className="portfolio-card-icons">
              <div className="portfolio-icon" id="icon1" onClick={alert} />
              <div className="portfolio-icon" id="icon2" onClick={alert} />
              <div className="portfolio-icon" id="icon3" onClick={alert} />
            </div>
            <div className="portfolio-links-container">
              <div className="portfolio-links">
                <div
                  className={`portfolio-link ${
                    view === "image" ? "portfolio-selected" : ""
                  }`}
                  onClick={() => setView("image")}
                >
                  preview
                </div>
                <div
                  className={`portfolio-link ${
                    view === "description" ? "portfolio-selected" : ""
                  }`}
                  onClick={() => setView("description")}
                >
                  description
                </div>
                <div
                  className={`portfolio-link ${
                    view === "techStack" ? "portfolio-selected" : ""
                  }`}
                  onClick={() => setView("techStack")}
                >
                  stack
                </div>
              </div>
              <div className="portfolio-spacer" />
            </div>
          </div>
          <PortfolioContent data={data} view={view} />
        </div>
        <div className="portfolio-name-container">
          <div className="portfolio-item-name">{data.title}</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
