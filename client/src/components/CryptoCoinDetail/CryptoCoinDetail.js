import React from "react";
import { Query } from "react-apollo";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";

const CryptoCoinDetail = ({ coinId }) => {
  return (
    <Query
      query={FETCH_SINGLE_COIN}
      variables={{
        coinId: coinId,
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <h1>loading</h1>;
        if (error) return <h1>{error}</h1>;

        const { fetchSingleCoin } = data;
        return (
          <div>
            <h1>{fetchSingleCoin.name}</h1>
            <p>{fetchSingleCoin.description}</p>
          </div>
        );
      }}
    </Query>
  );
};

export default CryptoCoinDetail;
