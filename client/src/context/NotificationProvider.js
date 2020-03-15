import React, { useState } from "react";
import NotificationContext from "./NotificationContext";

const NotificationProvider = ({ children }) => {
  const [notification, setMessage] = useState("");

  const setNotification = data => setMessage(data);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
