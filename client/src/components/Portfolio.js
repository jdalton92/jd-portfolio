import React from "react";
import {
  propertyInvestorDash,
  reactTrelloClone,
  flogs,
  jamesDaltionIo,
  pathify,
} from "../utils/portfolioData";
import PortfolioItem from "./PortfolioItem";
import "./styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="section">
      <div className="portfolio-container">
        <div className="header portfolio-header">
          <h3>PORTFOLIO</h3>
        </div>
        <PortfolioItem data={pathify} />
        <PortfolioItem data={propertyInvestorDash} />
        <PortfolioItem data={flogs} />
        <PortfolioItem data={reactTrelloClone} />
        <PortfolioItem data={jamesDaltionIo} />
      </div>
    </div>
  );
};

export default Portfolio;
