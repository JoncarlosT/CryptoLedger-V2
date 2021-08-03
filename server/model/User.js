const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 32,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cryptoWallet: [
    {
      type: Schema.Types.ObjectId,
      ref: "cryptocoin",
    },
  ],
});

UserSchema.statics.addCoinToWallet = async (userId, coinId) => {
  const User = mongoose.model("user");

  await User.updateOne(
    { _id: userId },
    {
      $push: { cryptoWallet: coinId },
    }
  );

  const user = await User.findById(userId);

  return user;
};

module.exports = mongoose.model("user", UserSchema);
