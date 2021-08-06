import gql from "graphql-tag";

export const FETCH_COINS = gql`
  query FetchCoins($num: Int!) {
    fetchCoins(numOfCoins: $num) {
      name
      symbol
      image
      market_cap
    }
  }
`;

export const FETCH_PRODUCT_DETAIL = gql`
  query FetchProductDetail($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      weight
      category {
        name
      }
    }
  }
`;
