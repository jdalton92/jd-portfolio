import React from "react";
import ReactDOM from "react-dom";
import NotificationProvider from "./context/NotificationProvider";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  rootElement
);
