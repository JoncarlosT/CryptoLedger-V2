import { gql } from "@apollo/client";

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

export const FETCH_SINGLE_COIN = gql`
  query FetchSingleCoin($coinId: ID!) {
    fetchSingleCoin(id: $coinId) {
      name
      symbol
      id
      description
    }
  }
`;

export const FETCH_SINGLE_USER = gql`
  query FetchSingleUser($_id: ID!) {
    user(_id: $_id) {
      _id
      name
      email
      token
      loggedIn
      cryptoWallet {
        _id
        name
        amount
        buyPrice
        cryptoImage
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    userData
  }
`;
