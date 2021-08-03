const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

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

    newCryptoCoin: {
      type: CryptoCoinType,
      args: {
        name: { type: GraphQLString },
        amount: { type: GraphQLInt },
        buyPrice: { type: GraphQLInt },
        cryptoImage: { type: GraphQLString },
      },
      resolve(_, { name, amount, buyPrice, cryptoImage }) {
        return new CryptoCoin({ name, amount, buyPrice, cryptoImage }).save();
      },
    },
  },
});

module.exports = mutation;
