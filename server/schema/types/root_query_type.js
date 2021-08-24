const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = graphql;
const fetch = require("node-fetch");

const UserType = require("./user_type");
const User = mongoose.model("user");

const CryptoCoinType = require("./cryptocoin_type");
const CryptoCoin = mongoose.model("cryptocoin");

const FetchCoinsType = require("./queryCoins_type");
const FetchCoinChartHistory = require("./queryCoinChartHistory_type");
const FetchSingleCoin = require("./querySingleCoin");

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

    fetchCoins: {
      type: new GraphQLList(FetchCoinsType),
      args: {
        numOfCoins: { type: new GraphQLNonNull(GraphQLFloat) },
        pageNum: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      async resolve(_, { numOfCoins, pageNum }) {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numOfCoins}&page=${pageNum}&sparkline=false`
        ).then((res) => res.json());

        return response;
      },
    },

    fetchSingleCoin: {
      type: FetchSingleCoin,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(_, { id }) {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        ).then((res) => res.json());

        return response;
      },
    },

    fetchCoinChartHistory: {
      type: FetchCoinChartHistory,
      args: {
        coin: { type: new GraphQLNonNull(GraphQLID) },
        days: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      async resolve(_, { coin, days }) {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${days}`
        ).then((res) => res.json());

        return response;
      },
    },
  }),
});

module.exports = RootQueryType;
