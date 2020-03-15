import React from "react";

const PortfolioContent = ({ data, view }) => {
  let body = "";

  if (view === "image") {
    body = (
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
      </div>
    );
  } else if (view === "description") {
    body = <div className="portfolio-description">{data.description}</div>;
  } else if (view === "techStack") {
    body = (
      <div className="portfolio-tech-stack">
        <ul>
          <li>
            <b>Frontend:</b>
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
          <li>
            <b>Database Hosting: </b>
            {data.tech.hosting.database}
          </li>
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
