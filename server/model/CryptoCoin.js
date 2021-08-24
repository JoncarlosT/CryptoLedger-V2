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

CryptoCoinSchema.statics.updateCoinInWallet = async (
  userId,
  name,
  amount,
  buyPrice
) => {
  const User = mongoose.model("user");
  const CryptoCoin = mongoose.model("cryptocoin");

  const { cryptoWallet } = await User.findById(userId).populate("cryptoWallet");
  const coin = cryptoWallet.find((coin) => coin.name === name);

  newAmount = coin.amount + amount;
  buyPrice = (coin.buyPrice + buyPrice) / 2;

  return CryptoCoin.findByIdAndUpdate(
    { _id: coin._id },
    { $set: { amount: newAmount, buyPrice: buyPrice } },
    { new: true },
    (err, coin) => {
      return coin;
    }
  );
};

module.exports = mongoose.model("cryptocoin", CryptoCoinSchema);
