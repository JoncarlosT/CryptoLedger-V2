const app = require("./server/server");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");

dotenv.config();

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});

if (process.env.NODE_ENV === "production") {
}
