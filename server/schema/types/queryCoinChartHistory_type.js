const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLFloat } = graphql;

const FetchCoinChartHistory = new GraphQLObjectType({
  name: "FetchCoinChartHistory",
  fields: {
    prices: { type: new GraphQLList(new GraphQLList(GraphQLFloat)) },
    market_caps: { type: new GraphQLList(new GraphQLList(GraphQLFloat)) },
    total_volumes: { type: new GraphQLList(new GraphQLList(GraphQLFloat)) },
  },
});

module.exports = FetchCoinChartHistory;
