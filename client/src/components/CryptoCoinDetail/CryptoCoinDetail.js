import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";
import { CoinHeaderWrapper, CoinImage, CoinName, CoinSymbol } from "./styles";

const CryptoCoinDetail = ({ coinId }) => {
  const { loading, data, error } = useQuery(FETCH_SINGLE_COIN, {
    variables: {
      coinId: coinId,
    },
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  const { fetchSingleCoin } = data;
  console.log(fetchSingleCoin);
  return (
    <div>
      <CoinHeaderWrapper>
        <CoinImage src={fetchSingleCoin.image} alt="Coin_Image" />
        <CoinName>{fetchSingleCoin.name}</CoinName>
        <CoinSymbol>{fetchSingleCoin.symbol}</CoinSymbol>
      </CoinHeaderWrapper>
      <p>{fetchSingleCoin.description}</p>
    </div>
  );
};

export default CryptoCoinDetail;
