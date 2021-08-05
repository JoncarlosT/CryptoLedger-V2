const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} = graphql;
const fetch = require("node-fetch");

const UserType = require("./user_type");
const User = mongoose.model("user");

const CryptoCoinType = require("./cryptocoin_type");
const CryptoCoin = mongoose.model("cryptocoin");

const CoinType = new GraphQLObjectType({
  name: "Coin",
  fields: {
    id: { type: GraphQLString },
    symbol: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      },
    },

    user: {
      type: UserType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, { _id }) {
        return User.findById(_id);
      },
    },

    cryptoCoins: {
      type: new GraphQLList(CryptoCoinType),
      resolve() {
        return CryptoCoin.find({});
      },
    },

    coins: {
      type: CoinType,
      async resolve() {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
        );
        console.log(res);
        return res;
      },
    },
  }),
});

module.exports = RootQueryType;
