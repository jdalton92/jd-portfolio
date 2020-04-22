import React, { useContext, useState } from "react";
import ContactIcons from "./ContactIcons";
import contactService from "../services/email";
import NotificationContext from "../context/NotificationContext";
import Fade from "react-reveal/Fade";
import "./styles/contact.scss";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const { setNotification } = useContext(NotificationContext);

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await contactService.sendEmail(form);
      setForm({});
      setLoading(false);
      setNotification("Message Sent");
      setTimeout(() => setNotification(""), 10000);
    } catch (e) {
      console.log(e);
      setNotification(
        "Request failed, please contact me via the Gmail link on the landing page"
      );
      setTimeout(() => setNotification(""), 10000);
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="contact-container">
        <div className="header contact-header">
          <Fade top>
            <h3>CONTACT ME</h3>
          </Fade>
        </div>
        <Fade bottom>
          <div className="form-container">
            {loading ? (
              <div className="loader">Loading...</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <input
                    onChange={formHandler}
                    name="fullName"
                    placeholder="name"
                    className="form-input"
                    type="text"
                    maxLength="50"
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    onChange={formHandler}
                    placeholder="your@email.com"
                    name="email"
                    className="form-input"
                    type="email"
                    maxLength="100"
                    required
                  />
                </div>
                <div className="form-field message-field">
                  <textarea
                    onChange={formHandler}
                    name="message"
                    placeholder="message"
                    className="form-input"
                    id="form-message"
                    input="text"
                    maxLength="1250"
                    required
                  />
                </div>
                <div className="form-button-container">
                  <button
                    className="form-button"
                    id="form-submit"
                    type="submit"
                    variant="primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
            <div className="contact-icons">
              <ContactIcons />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
