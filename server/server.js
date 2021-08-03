const express = require("express");
const mongoose = require("mongoose");

const DB_CONNECTION = require("./config/keys").DB_CONNECTION;

if (!DB_CONNECTION) {
  throw new Error("You must provide correct key to connect to DB");
}

mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();

module.exports = app;
