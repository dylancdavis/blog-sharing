const http = require("http");
const express = require("express");
require("express-async-errors");
const app = express();
const config = require("./utils/config.js");
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs.js");
const userRouter = require("./controllers/users.js");
const loginRouter = require("./controllers/login.js");
const tokenFromReqest = require("./utils/tokenExtractor.js");
const errorHandler = require("./utils/errorHandler.js");
const userExtractor = require("./utils/userExtractor.js");
const morgan = require("morgan");

async function connectToDatabase() {
  if (
    process.env.NODE_ENV === "test" ||
    process.env.NODE_ENV === "development"
  ) {
    await mongoose.connect(config.MONGO_URI_TEST);
  } else {
    await mongoose.connect(config.MONGO_URI);
  }
}

connectToDatabase();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(tokenFromReqest);
app.use(userExtractor);

app.use(express.static("build"));

app.use("/api/blogs", blogsRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing.js");
  app.use("/api/testing", testingRouter);
}

app.use(errorHandler);

module.exports = app;
