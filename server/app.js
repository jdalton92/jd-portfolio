const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const middleware = require("./utils/middleware");
const emailRouter = require("./controllers/email");

app.use(cors());
app.use(express.static("build"));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(middleware.requestLogger);

app.use("/api/email", emailRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.use(middleware.errorHandler);

module.exports = app;
