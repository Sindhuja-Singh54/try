const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// connect .env
require("dotenv").config();

const http = require("http");
const path = require("path");

// app initialize

const app = express();

// connect database
mongoose
  .connect(process.env.DATABASE, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Databse connected"))
  .catch((err) => console.log("connection error", err));

//   middlewares
app.use(morgan("dev"));

// server
const httpServer = http.createServer(app);
const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
  console.log(`server is running on ${port}`);
});