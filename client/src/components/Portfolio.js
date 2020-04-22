import React from "react";
import {
  propertyInvestorDash,
  reactTrelloClone,
  flogs,
  jamesDaltionIo,
  moocs,
} from "../utils/portfolioData";
import PortfolioItem from "./PortfolioItem";
import Fade from "react-reveal/Fade";
import "./styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="section">
      <div className="portfolio-container">
        <div className="header portfolio-header">
          <h3>PORTFOLIO</h3>
        </div>
        <PortfolioItem data={propertyInvestorDash} />
        <PortfolioItem data={flogs} />
        <PortfolioItem data={reactTrelloClone} />
        <PortfolioItem data={jamesDaltionIo} />
        <PortfolioItem data={moocs} />
      </div>
    </div>
  );
};

export default Portfolio;
