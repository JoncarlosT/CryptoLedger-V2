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
    current_price: {
      type: GraphQLString,
      resolve: (res) => res.market_data.current_price.usd,
    },
    market_cap: {
      type: GraphQLString,
      resolve: (res) => res.market_data.market_cap.usd,
    },
    total_volume: {
      type: GraphQLString,
      resolve: (res) => res.market_data.total_volume.usd,
    },
    total_supply: {
      type: GraphQLString,
      resolve: (res) => res.market_data.total_supply,
    },
  },
});

module.exports = FetchSingleCoin;
