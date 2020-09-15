import React, { useContext } from "react";
import NotificationContext from "../context/NotificationContext";

const PortfolioContent = ({ data, view }) => {
  const { setNotification } = useContext(NotificationContext);

  const handleLiveLink = (e) => {
    e.preventDefault();
    const win = window.open(data.url);
    if (win != null) {
      win.focus();
    }
  };

  const handleGitHubLink = (e) => {
    e.preventDefault();
    if (data.github) {
      const win = window.open(data.github);
      if (win != null) {
        win.focus();
      }
    } else {
      setNotification("Not open source!");
      setTimeout(() => setNotification(""), 10000);
    }
  };

  let body = "";
  if (view === "image") {
    body = (
      <>
        <div className="portfolio-image-container">
          <img
            alt={`${data.title} desktop`}
            title={`${data.title} desktop`}
            src={data.image.desktop}
            width="30"
            height="30"
            className="portfolio-image-desktop"
          />
          <img
            alt={`${data.title} mobile`}
            title={`${data.title} mobile`}
            src={data.image.mobile}
            width="30"
            height="30"
            className="portfolio-image-mobile"
          />
          <div className="portfolio-link-container">
            <div className="portfolio-url-wrapper">
              <button className="portfolio-item-url" onClick={handleLiveLink}>
                View Site
              </button>
            </div>
            <div className="portfolio-url-wrapper">
              <button className="portfolio-item-url" onClick={handleGitHubLink}>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (view === "detail") {
    body = (
      <div className="portfolio-bullets">
        <ul>
          <li>
            <b>Company: </b> {data.detail.company}
          </li>
          <li>
            <b>Role: </b> {data.detail.role}
          </li>
          <li>
            <b>Development Phase: </b> {data.detail.developmentPhase}
          </li>
          <li>
            <b>Product Description: </b> {data.detail.description}
          </li>
        </ul>
      </div>
    );
  } else if (view === "techStack") {
    body = (
      <div className="portfolio-bullets">
        <ul>
          <li>
            <b>Frontend: </b>
            {data.tech.frontend}
          </li>
          <li>
            <b>Backend: </b>
            {data.tech.backend}
          </li>
          <li>
            <b>API: </b>
            {data.tech.api}
          </li>
          {data.tech.hosting.database && (
            <li>
              <b>Database Hosting: </b>
              {data.tech.hosting.database}
            </li>
          )}
          <li>
            <b>Website Hosting: </b>
            {data.tech.hosting.website}
          </li>
        </ul>
      </div>
    );
  }

  return <div className="portfolio-card-body">{body}</div>;
};

export default PortfolioContent;
