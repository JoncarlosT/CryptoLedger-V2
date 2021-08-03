const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CryptoCoinSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  cryptoImage: {
    type: String,
  },
});

module.exports = mongoose.model("cryptocoin", CryptoCoinSchema);
