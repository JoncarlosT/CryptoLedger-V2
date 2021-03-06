const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const DB_CONNECTION = require("./server/config/keys").DB_CONNECTION;
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const model = require("./server/model");
const schema = require("./server/schema/schema");
const PORT = process.env.PORT || 5000;
const path = require("path");

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

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
