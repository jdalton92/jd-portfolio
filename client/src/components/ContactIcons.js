import React from "react";

const ContactIcons = () => {
  const handleLinkedIn = e => {
    e.preventDefault();
    const win = window.open(
      "https://au.linkedin.com/in/james-dalton-b786a876",
      "_blank"
    );
    if (win != null) {
      win.focus();
    }
  };

  const handleGitHub = e => {
    e.preventDefault();
    const win = window.open("https://github.com/jdalton92/", "_blank");
    if (win != null) {
      win.focus();
    }
  };

  const handleGmail = e => {
    e.preventDefault();
    window.location.href =
      "mailto:jamesdalton7648@gmail.com?subject=jamesdalton.io%20message";
  };

  return (
    <>
      <div
        title="LinkedIn"
        onClick={handleLinkedIn}
        className="contact-icon linkedin-icon"
      />
      <div
        title="GitHub"
        onClick={handleGitHub}
        className="contact-icon github-icon"
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
