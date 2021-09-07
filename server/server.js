const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const DB_CONNECTION = require("./config/keys").DB_CONNECTION;
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const model = require("./model");
const schema = require("./schema/schema");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

if (!DB_CONNECTION) {
  throw new Error("You must provide correct key to connect to DB");
}

mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/app/client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
module.exports = app;
