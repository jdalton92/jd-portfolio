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
app.use(express.static(__dirname + "/build"));
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
app.use(bodyParser.json());

app.use(middleware.errorHandler);
app.use(middleware.requestLogger);

app.use("/api/email", emailRouter);

module.exports = app;
