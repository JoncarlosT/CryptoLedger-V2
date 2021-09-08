const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql;

const CryptoCoinType = new GraphQLObjectType({
  name: "CryptoCoin",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    buyPrice: { type: GraphQLFloat },
    cryptoImage: { type: GraphQLString },
  }),
});

module.exports = CryptoCoinType;
