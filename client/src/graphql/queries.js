import gql from "graphql-tag";

export const FETCH_COINS = gql`
  query FetchCoins($num: Int!) {
    fetchCoins(numOfCoins: $num) {
      name
      symbol
      image
      market_cap
      total_volume
      current_price
    }
  }
`;
