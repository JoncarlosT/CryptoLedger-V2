const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const CryptoCoinType = new GraphQLObjectType({
  name: "CryptoCoin",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    amount: { type: GraphQLInt },
    buyPrice: { type: GraphQLInt },
    cryptoImage: { type: GraphQLString },
  }),
});

module.exports = CryptoCoinType;
