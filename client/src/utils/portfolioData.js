import React from "react";
import propertyInvestorDashDesktopImage from "../components/styles/images/property-investor-dash(2).png";
import propertyInvestorDashMobileImage from "../components/styles/images/property-investor-dash-mobile.png";
import jamesDaltonIoDesktopImage from "../components/styles/images/jamesdaltonio.png";
import jamesDaltonIoMobileImage from "../components/styles/images/jamesdaltonio-mobile.png";
import reactTrelloCloneDesktopImage from "../components/styles/images/react-trello-clone-desktop.jfif";
import reactTrelloCloneMobileImage from "../components/styles/images/react-trello-clone-mobile.jpg";
import flogsDesktopImage from "../components/styles/images/flogs-desktop.jfif";
import flogsMobileImage from "../components/styles/images/flogs-mobile.jpg";
import moocsDesktopImage from "../components/styles/images/moocs.jfif";
import moocsMobileImage from "../components/styles/images/moocs-mobile.jpg";

export const propertyInvestorDash = {
  title: "PropertyInvestorDASH",
  url: "www.propertyinvestordash.com",
  image: {
    desktop: propertyInvestorDashDesktopImage,
    mobile: propertyInvestorDashMobileImage
  },
  description: (
    <div className="propertyinvestordash-description">
      <span>
        PropertyInvestorDASH is an open source create/read/update/delete (CRUD)
        responsive single page application (SPA) that is used as a simple tool
        for estimating property investments with simple dashboard outputs
      </span>
    </div>
  ),
  tech: {
    frontend:
      "HTML, CSS, React (16.8+), Redux/Hooks, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "REST",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website:
        "Digital Ocean with Nginx reverse proxy, and SSL encryption with LetsEncrypt"
    }
  }
};

export const jamesDaltionIo = {
  title: "jamesdalton.io",
  url: "www.jamesdalton.io",
  image: {
    desktop: jamesDaltonIoDesktopImage,
    mobile: jamesDaltonIoMobileImage
  },
  description: (
    <div className="jamesdaltonio-description">
      <span>
        jamesdalton.io is a responsive website to display information about
        myself including professional/academic history, as well as provide
        detail about my portfolio of bespoke web applications
      </span>
    </div>
  ),
  tech: {
    frontend:
      "HTML, CSS/SCSS, React (16.8+), React Hooks, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "REST",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website:
        "Digital Ocean with Nginx reverse proxy, and SSL encryption with LetsEncrypt"
    }
  }
};

export const flogs = {
  title: "flogs.me",
  url: "www.flogs.me",
  image: {
    desktop: flogsDesktopImage,
    mobile: flogsMobileImage
  },
  description: (
    <div className="flogs-description">
      <span>
        flogs.me started as a finance blog (flog) and has expanded to be a
        lifestyle blog for posting content from different contributors in
        different topics including money, fitness, lifestyle, art, and more
      </span>
    </div>
  ),
  tech: {
    frontend:
      "HTML, CSS/SCSS, React (16.8+), React Hooks, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "REST",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website:
        "Digital Ocean with Nginx reverse proxy, and SSL encryption with LetsEncrypt"
    }
  }
};

export const reactTrelloClone = {
  title: "React Trello Clone",
  url: "reacttrelloclone.herokuapp.com",
  image: {
    desktop: reactTrelloCloneDesktopImage,
    mobile: reactTrelloCloneMobileImage
  },
  description: (
    <div className="reacttrelloclone-description">
      <span>
        React Trello Clone is a recreation of a minimal Trello clone with
        React/Redux, that I've built to use as a personal tool for tracking app
        development, and to test different UI/UX concepts
      </span>
    </div>
  ),
  tech: {
    frontend:
      "HTML, SCSS, React (16.8+), Redux, React Hooks, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "REST",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website:
        "Digital Ocean with Nginx reverse proxy, and SSL encryption with LetsEncrypt"
    }
  }
};

export const moocs = {
  title: "Massive Online Open Courses (MOOCs)",
  url: "https://github.com/jdalton92",
  image: {
    desktop: moocsDesktopImage,
    mobile: moocsMobileImage
  },
  description: (
    <div className="mooc-table">
      <div className="mooc-table-row">
        <div className="mooc-table-heading">
          HarvardX: CS50X Introduction to Computer Science
        </div>
        <div className="mooc-table-text">
          <ul>
            <li>
              C: fundamentals of procedural programming, memory allocation, data
              structures/types. structs, pointers
            </li>
            <li>
              Python: fundamentals of object orientated progamming, key
              applications of class/functions/methods, web development with
              Flask framework/HTML/CSS/jQuery
            </li>
            <li>SQL: database management, querying, and hosting</li>
          </ul>
        </div>
      </div>
      <div className="mooc-table-row">
        <div className="mooc-table-heading">
          University of Helsinki: Deep Dive Into Modern Web Development
        </div>
        <div className="mooc-table-text">
          <ul>
            <li>
              Fundamentals of full stack web development. State management with
              React hooks and redux, full stack single page application
              development using React functional components, implementing
              styling to webpages with CSS styled components / UI Frameworks
              (Bootstrap/Semantic UI), developing/integration with backend
              RESTful and GraphQL APIs, token authentication, debugging /
              linting / E2E testing with ESLint / Jest / Cypress, hosting with
              AWS and Heroku
            </li>
            <li>
              Fundamental experience in object oriented programming, functional
              programing, with practical web development applications utilising
              ECMA 6 standard JavaScript with try/catch blocks and async/await
              functions
            </li>
          </ul>
        </div>
      </div>
      <div className="mooc-table-row">
        <div className="mooc-table-heading">
          Stanford: Machine Learning (in progress)
        </div>
        <div className="mooc-table-text">
          <ul>
            <li>
              Introduction to machine learning with data science libraries in
              Python (numPy)
            </li>
            <li>Supervised/unsupervised machine learning</li>
            <li>Innovation process in machine learning and A.I.</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  tech: {
    frontend: "HTML, CSS, JQuery, React, Redux",
    backend: "Python (Flask), Node, Mongoose, Express, MongoDB, SQL",
    api: "REST, GraphQL",
    other: "Python (matplotlib), Octave, Matlab",
    hosting: {
      database: "AtlasDB & Amazon Web Services (AWS)",
      website: "Heroku"
    }
  }
};
