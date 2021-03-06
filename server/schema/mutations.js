const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLFloat,
} = graphql;
const AuthService = require("../services/auth");

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
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_, { name, email, password }) {
        return new User({ name, email, password }).save();
      },
    },

    addCoinToUserWallet: {
      type: UserType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLFloat) },
        buyPrice: { type: new GraphQLNonNull(GraphQLFloat) },
        cryptoImage: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, { userId, name, amount, buyPrice, cryptoImage }) {
        const currentUserWallet = await User.findById(userId)
          .populate("cryptoWallet")
          .then((user) => user.cryptoWallet)
          .then((coin) => coin.map((el) => el.name));

        if (currentUserWallet.includes(name)) {
          return CryptoCoin.updateCoinInWallet(userId, name, amount, buyPrice);
        } else {
          const newCoin = await new CryptoCoin({
            name,
            amount,
            buyPrice,
            cryptoImage,
          }).save();

          return User.addCoinToWallet(userId, newCoin._id);
        }
      },
    },

    sellCoin: {
      type: CryptoCoinType,
      args: {
        coinId: { type: new GraphQLNonNull(GraphQLID) },
        amount: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      resolve(_, { coinId, amount }) {
        return CryptoCoin.findByIdAndUpdate(
          { _id: coinId },
          { $set: { amount } },
          { new: true },
          (err, coin) => {
            return coin;
          }
        );
      },
    },

    removeCoin: {
      type: UserType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        coinId: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(_, { userId, coinId }) {
        await CryptoCoin.findByIdAndDelete(coinId);

        return User.findById(userId);
      },
    },

    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_, args) {
        return AuthService.register(args);
      },
    },

    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_, args) {
        return AuthService.login(args);
      },
    },

    logout: {
      type: UserType,
      args: {
        _id: { type: GraphQLID },
      },
      resolve(_, args) {
        return AuthService.logout(args);
      },
    },

    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString },
      },
      resolve(_, args) {
        return AuthService.verifyUser(args);
      },
    },
  },
});

module.exports = mutation;
