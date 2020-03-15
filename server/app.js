const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const middleware = require("./utils/middleware");

const emailRouter = require("./controllers/email");

app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
app.use(bodyParser.json());

app.use(middleware.errorHandler);
app.use(middleware.requestLogger);

app.use("/api/email", emailRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

module.exports = app;
