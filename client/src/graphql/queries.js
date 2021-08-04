import gql from "graphql-tag";

export const FETCH_COIN = gql`
  {
    cryptoCoins {
      _id
      name
    }
  }
`;
