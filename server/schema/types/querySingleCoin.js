const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } = graphql;

const FetchSingleCoin = new GraphQLObjectType({
  name: "FetchSingleCoinType",
  fields: {
    id: { type: GraphQLString },
    symbol: { type: GraphQLString },
    name: { type: GraphQLString },
    hashing_algorithm: { type: GraphQLString },
    description: {
      type: GraphQLString,
      resolve: (res) => res.description.en,
    },
    image: {
      type: GraphQLString,
      resolve: (res) => res.image.small,
    },
    genesis_date: { type: GraphQLString },
  },
});

module.exports = FetchSingleCoin;
