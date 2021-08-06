import React from "react";
import { Query } from "react-apollo";
import { FETCH_COINS } from "../graphql/queries";

const CryptoCoinIndex = ({ numOfCoin }) => (
  <Query
    query={FETCH_COINS}
    variables={{
      num: numOfCoin,
    }}
  >
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading</h1>;
      if (error) return <h1>{error}</h1>;

      const { fetchCoins } = data;
      return (
        <div>
          <input type="text" />
          {fetchCoins.map((coin, idx) => {
            return <h1 key={idx}>{coin.name}</h1>;
          })}
        </div>
      );
    }}
  </Query>
);

export default CryptoCoinIndex;
