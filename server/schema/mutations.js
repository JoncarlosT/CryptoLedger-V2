const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
} = graphql;

const UserType = require("./types/user_type");
const User = mongoose.model("user");

const CryptoCoinType = require("./types/cryptocoin_type");
const CryptoCoin = mongoose.model("cryptocoin");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_, { name, email, password }) {
        return new User({ name, email, password }).save();
      },
    },

    addCoinToUserWallet: {
      type: UserType,
      args: {
        userId: { type: GraphQLID },
        name: { type: GraphQLString },
        amount: { type: GraphQLInt },
        buyPrice: { type: GraphQLInt },
        cryptoImage: { type: GraphQLString },
      },
      async resolve(_, { userId, name, amount, buyPrice, cryptoImage }) {
        const newCoin = await new CryptoCoin({
          name,
          amount,
          buyPrice,
          cryptoImage,
        }).save();

        return User.addCoinToWallet(userId, newCoin._id);
      },
    },

    updateCoin: {
      type: CryptoCoinType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        amount: { type: new GraphQLNonNull(GraphQLInt) },
        buyPrice: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(_, { _id, amount, buyPrice }) {
        return CryptoCoin.findByIdAndUpdate(
          { _id: _id },
          { $set: { amount, buyPrice } },
          { new: true },
          (err, coin) => {
            return coin;
          }
        );
      },
    },
  },
});

module.exports = mutation;
