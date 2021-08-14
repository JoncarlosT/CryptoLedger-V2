import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";

const CryptoCoinDetail = ({ coinId }) => {
  const { loading, data, error } = useQuery(FETCH_SINGLE_COIN, {
    variables: {
      coinId: coinId,
    },
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  const { fetchSingleCoin } = data;
  return (
    <div>
      <h1>{fetchSingleCoin.name}</h1>
      <p>{fetchSingleCoin.description}</p>
    </div>
  );
};

export default CryptoCoinDetail;
