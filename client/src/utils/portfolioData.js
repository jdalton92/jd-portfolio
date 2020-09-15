import propertyInvestorDashDesktopImage from "../components/styles/images/propertyinvestordash-desktop.jpg";
import propertyInvestorDashMobileImage from "../components/styles/images/propertyinvestordash-mobile.jpg";
import jamesDaltonIoDesktopImage from "../components/styles/images/jamesdaltonio-desktop.jpg";
import jamesDaltonIoMobileImage from "../components/styles/images/jamesdaltonio-mobile.jpg";
import reactTrelloCloneDesktopImage from "../components/styles/images/reacttrelloclone-desktop.jpg";
import reactTrelloCloneMobileImage from "../components/styles/images/reacttrelloclone-mobile.jpg";
import flogsDesktopImage from "../components/styles/images/flogs-desktop.jpg";
import flogsMobileImage from "../components/styles/images/flogs-mobile.jpg";
import campusDesktopImage from "../components/styles/images/campus-desktop.jpg";
import campusMobileImage from "../components/styles/images/campus-mobile.jpg";

export const propertyInvestorDash = {
  title: "PropertyInvestorDASH",
  url: "https://propertyinvestordash.com",
  image: {
    desktop: propertyInvestorDashDesktopImage,
    mobile: propertyInvestorDashMobileImage,
  },
  detail: {
    company: "n/a",
    role: "Sole creator/owner",
    developmentPhase: "Prototype",
    description:
      "PropertyInvestorDASH is an open source create/read/update/delete (CRUD) responsive single page application (SPA) that is used as a simple tool for estimating property investments with simple dashboard outputs",
  },
  tech: {
    frontend:
      "HTML, CSS, React (16.8+), Redux/Hooks, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "REST",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website:
        "Digital Ocean with Nginx reverse proxy, and SSL encryption with LetsEncrypt",
    },
  },
  github: "https://github.com/jdalton92/property-investor-dash",
};

export const jamesDaltionIo = {
  title: "jamesdalton.io",
  url: "https://jamesdalton.io",
  image: {
    desktop: jamesDaltonIoDesktopImage,
    mobile: jamesDaltonIoMobileImage,
  },
  detail: {
    company: "n/a",
    role: "Sole creator/owner",
    developmentPhase: "Prototype",
    description:
      "jamesdalton.io is a responsive website to display information about myself including professional/academic history, as well as provide detail about my portfolio of bespoke web applications",
  },
  tech: {
    frontend:
      "HTML, CSS/SCSS, React (16.8+), state management with React context hooks, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "REST",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website:
        "Digital Ocean with Nginx reverse proxy, and SSL encryption with LetsEncrypt",
    },
  },
  github: "https://github.com/jdalton92/jd-portfolio",
};

export const flogs = {
  title: "flogs.me",
  url: "https://flogs.me",
  image: {
    desktop: flogsDesktopImage,
    mobile: flogsMobileImage,
  },
  detail: {
    company: "n/a",
    role: "Sole creator/owner",
    developmentPhase: "Prototype",
    description:
      "flogs.me started as a finance blog (flog) and has expanded to be a lifestyle blog for posting content from different contributors in different topics including money, fitness, lifestyle, art, and more. Content for flogs.me is continually being expanded, and maintained by a custom content management system (CMS) that I developed specifically for flogs.me",
  },
  tech: {
    frontend:
      "HTML, CSS/SCSS, React (16.8+), state management with React context hooks, Apollo Client, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "GraphQL with Apollo Server",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website:
        "Digital Ocean with Nginx reverse proxy, and SSL encryption with LetsEncrypt",
    },
  },
  github: "https://github.com/jdalton92/flogs.me",
};

export const reactTrelloClone = {
  title: "React Trello Clone",
  url: "http://reacttrelloclone.herokuapp.com",
  image: {
    desktop: reactTrelloCloneDesktopImage,
    mobile: reactTrelloCloneMobileImage,
  },
  detail: {
    company: "n/a",
    role: "Sole creator/owner",
    developmentPhase: "Prototype",
    description:
      "React Trello Clone is a minimal responsive web application used as a Trello clone with a personalised interface made with React/Redux. I prototyped this application to use for tracking my web app development, and to test different UI/UX concepts.",
  },
  tech: {
    frontend:
      "HTML, SCSS, React (16.8+), Redux, React Hooks, Axios. JavaScript ES5/6 with try/catch blocks and async/await",
    backend: "Node, Express, Mongoose, MongoDB",
    api: "REST",
    hosting: {
      database: "AtlasDB with Amazon Web Services (AWS)",
      website: "Heroku",
    },
  },
  github: "https://github.com/jdalton92/react-trello-clone",
};

export const campus = {
  title: "Ucroo: Campus App",
  url: "https://campus.app",
  image: {
    desktop: campusDesktopImage,
    mobile: campusMobileImage,
  },
  detail: {
    company: "Campus",
    role: "Full Stack Engineer in core development team",
    developmentPhase: "Production",
    description:
      "Campus is a modern end to end portal to connect everyone and everything you do at colleges/institutions - a single, personalized place for students, staff, faculty, prospects, alumni, communications, events, information, files and systems. Adopted by close to 50 partners, with over a million page visits every week.",
  },
  tech: {
    frontend: "Angular9, TypeScript, HTML, SASS/CSS",
    backend: "Python (Django), PostgreSQL, Celery, RabbitMQ, Docker",
    api: "REST",
    hosting: {
      database: null,
      website: "Google Kubernetes Engine (Docker & Kubernetes)",
    },
  },
  github: null,
};
