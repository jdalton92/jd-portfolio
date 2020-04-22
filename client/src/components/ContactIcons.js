import React from "react";
import "./styles/ContactIcons.css";

const ContactIcons = () => {
  const handleLinkedIn = (e) => {
    e.preventDefault();
    const win = window.open(
      "https://au.linkedin.com/in/james-dalton-b786a876",
      "_blank"
    );
    if (win != null) {
      win.focus();
    }
  };

  const handleGitHub = (e) => {
    e.preventDefault();
    const win = window.open("https://github.com/jdalton92/", "_blank");
    if (win != null) {
      win.focus();
    }
  };

  const handleGmail = (e) => {
    e.preventDefault();
    window.location.href =
      "mailto:jamesdalton7648@gmail.com?subject=jamesdalton.io%20message";
  };

  const handleDevto = (e) => {
    e.preventDefault();
    const win = window.open("https://dev.to/jdalton92", "_blank");
    if (win != null) {
      win.focus();
    }
  };

  const handleStackOverflow = (e) => {
    e.preventDefault();
    const win = window.open(
      "https://stackoverflow.com/users/12918308/flash22",
      "_blank"
    );
    if (win != null) {
      win.focus();
    }
  };

  return (
    <>
      <div
        title="GitHub"
        onClick={handleGitHub}
        className="contact-icon github-icon"
      />
      <div
        title="StackOverflow"
        onClick={handleStackOverflow}
        className="contact-icon stackoverflow-icon"
      />
      <div
        title="Dev.to"
        onClick={handleDevto}
        className="contact-icon devto-icon"
      />
      <div
        title="LinkedIn"
        onClick={handleLinkedIn}
        className="contact-icon linkedin-icon"
      />
      <div
        title="Gmail"
        onClick={handleGmail}
        className="contact-icon gmail-icon"
      />
    </>
  );
};

export default ContactIcons;
