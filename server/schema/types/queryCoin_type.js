const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLFloat } = graphql;

const FetchCoinType = new GraphQLObjectType({
  name: "FetchCoinType",
  fields: {
    id: { type: GraphQLString },
    symbol: { type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    current_price: { type: GraphQLFloat },
    market_cap: { type: GraphQLFloat },
    market_cap_rank: { type: GraphQLFloat },
    fully_diluted_valuation: { type: GraphQLFloat },
    total_volume: { type: GraphQLFloat },
    high_24h: { type: GraphQLFloat },
    low_24h: { type: GraphQLFloat },
    price_change_24h: { type: GraphQLFloat },
    price_change_percentage_24h: { type: GraphQLFloat },
    market_cap_change_24h: { type: GraphQLFloat },
    market_cap_change_percentage_24h: { type: GraphQLFloat },
    circulating_supply: { type: GraphQLFloat },
    total_supply: { type: GraphQLFloat },
    max_supply: { type: GraphQLFloat },
    ath: { type: GraphQLFloat },
    ath_change_percentage: { type: GraphQLFloat },
    ath_date: { type: GraphQLString },
    atl: { type: GraphQLFloat },
    atl_change_percentage: { type: GraphQLFloat },
    atl_date: { type: GraphQLString },
    last_updated: { type: GraphQLString },
  },
});

module.exports = FetchCoinType;
