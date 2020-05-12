import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NotificationProvider from "./context/NotificationProvider";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <NotificationProvider>
    <Router>
      <App />
    </Router>
  </NotificationProvider>,
  rootElement
);
