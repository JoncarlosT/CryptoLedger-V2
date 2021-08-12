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

CryptoCoinSchema.pre("findOneAndDelete", function (next) {
  coinId = this.getQuery()["_id"];

  mongoose
    .model("user")
    .find({ cryptoWallet: coinId })
    .updateOne(
      {},
      {
        $pull: {
          cryptoWallet: coinId,
        },
      },
      { multi: true },
      next
    );
});

module.exports = mongoose.model("cryptocoin", CryptoCoinSchema);
