import React, { useContext } from "react";
import NotificationContext from "../context/NotificationContext";
import "./styles/notification.css";

const Notification = () => {
  const { notification, setNotification } = useContext(NotificationContext);

  if (notification) {
    return (
      <div className="notification-container">
        <div className="notification">
          <div className="notification-header">
            <div className="notification-title">Notification</div>
            <div
              className="notification-close"
              onClick={() => setNotification("")}
            >
              x
            </div>
          </div>
          <div className="notification-body">{notification}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Notification;
