import gql from "graphql-tag";

export const FETCH_COINS = gql`
  query FetchCoins($num: Int!) {
    fetchCoins(numOfCoins: $num) {
      id
      name
      symbol
      image
      market_cap
      total_volume
      current_price
    }
  }
`;

export const FETCH_COIN_CHART_HISTORY = gql`
  query FetchCoinChartHistory($coin: ID!, $days: Int!) {
    fetchCoinChartHistory(coin: $coin, days: $days) {
      prices
    }
  }
`;
