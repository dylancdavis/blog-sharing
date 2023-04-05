const http = require("http");
const express = require("express");
require("express-async-errors");
const app = express();
const config = require("./utils/config");
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const tokenFromReqest = require("./utils/tokenExtractor");
const errorHandler = require("./utils/errorHandler.js");
const userExtractor = require("./utils/userExtractor");
const morgan = require("morgan");

if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development") {
  mongoose.connect(config.MONGO_URI_TEST);
  app.use(morgan("tiny"));
} else {
  mongoose.connect(config.MONGO_URI);
}

app.use(cors());
app.use(express.json());
app.use(tokenFromReqest);
app.use(userExtractor);

app.use("/api/blogs", blogsRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

app.use(errorHandler);

module.exports = app;
