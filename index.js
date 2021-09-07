const app = require("./server/server");
const PORT = process.env.PORT || 5000;
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
