import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";
import {
  StyledEditCoinMenu,
  CoinHeaderWrapper,
  CoinImage,
  CoinName,
  CoinSymbol,
} from "./styles";

const EditCoinMenu = ({ userCoin }) => {
  console.log(userCoin);

  const { data, loading, error } = useQuery(FETCH_SINGLE_COIN, {
    variables: {
      coinId: userCoin.name,
    },
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  const { fetchSingleCoin } = data;

  return (
    <StyledEditCoinMenu>
      <CoinHeaderWrapper>
        <CoinImage src={fetchSingleCoin.image} alt="Coin_Image" />
        <CoinName>{fetchSingleCoin.name}</CoinName>
        <CoinSymbol>{fetchSingleCoin.symbol}</CoinSymbol>
      </CoinHeaderWrapper>
      <h1>Quantity: {userCoin.amount}</h1>
      <h1>Average Cost: {userCoin.buyPrice}</h1>
      <h1>Equlity: {userCoin.amount * fetchSingleCoin.current_price}</h1>
      <h1>Total return: Math</h1>
    </StyledEditCoinMenu>
  );
};

export default EditCoinMenu;
