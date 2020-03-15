import React from "react";
import ReactDOM from "react-dom";
import NotificationProvider from "./context/NotificationProvider";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  rootElement
);
