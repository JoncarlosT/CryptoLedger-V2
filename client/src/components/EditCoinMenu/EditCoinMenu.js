import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";
import coinFormat from "../../util/coinFormat";
import RemoveCoinButton from "../RemoveCoinButton/RemoveCoinButton";
import SellCoinButton from "../SellCoinButton/SellCoinButton";
import {
  StyledEditCoinMenu,
  CoinHeaderWrapper,
  CoinImage,
  CoinName,
  CoinSymbol,
} from "./styles";

const EditCoinMenu = ({ userCoin }) => {
  const [sellCoin, setSellCoin] = useState(false);

  const percentChange = (originalPrice, currentPrice) => {
    return (
      (Math.ceil(((originalPrice - currentPrice) / originalPrice) * 100 * 100) /
        100) *
      -1
    );
  };

  const totalReturn = (total, percentChange) => {
    return Math.ceil(total * (percentChange / 100));
  };

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
        <RemoveCoinButton coinData={userCoin} />
      </CoinHeaderWrapper>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSellCoin(!sellCoin);
        }}
      >
        {sellCoin ? <>Cancel</> : <>Sell</>}
      </button>

      <h1>Quantity: {coinFormat(userCoin.amount)}</h1>
      {sellCoin ? <SellCoinButton coin={userCoin} /> : <></>}

      <h1>Average Cost: {coinFormat(userCoin.buyPrice)}</h1>

      <h1>
        Equlity: $
        {coinFormat(
          Math.round(100 * userCoin.amount * fetchSingleCoin.current_price) /
            100
        )}
      </h1>
      <h1>
        Return: $
        {totalReturn(
          userCoin.amount * userCoin.buyPrice,
          percentChange(userCoin.buyPrice, fetchSingleCoin.current_price)
        )}
        ({percentChange(userCoin.buyPrice, fetchSingleCoin.current_price)}%)
      </h1>
    </StyledEditCoinMenu>
  );
};

export default EditCoinMenu;
