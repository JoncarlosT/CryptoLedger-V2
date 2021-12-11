import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";
import coinFormat from "../../util/coinFormat";
import SellCoinButton from "../SellCoinButton/SellCoinButton";
import Loading from "../../util/Loading";
import {
  StyledEditCoinMenu,
  CoinHeaderWrapper,
  CoinImage,
  CoinName,
  CoinSymbol,
  StyledButtonWrapper,
  LoadingWrapper,
  CoinText,
} from "./styles";
import StyledButton from "../StyledButton/StyledButton";

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

  if (loading)
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );

  if (error) return <h1>{error}</h1>;

  const { fetchSingleCoin } = data;

  return (
    <StyledEditCoinMenu>
      <CoinHeaderWrapper>
        <CoinImage src={fetchSingleCoin.image} alt="Coin_Image" />
        <CoinName>{fetchSingleCoin.name}</CoinName>
        <CoinSymbol>{fetchSingleCoin.symbol}</CoinSymbol>
      </CoinHeaderWrapper>
      <StyledButtonWrapper>
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            setSellCoin(!sellCoin);
          }}
        >
          {sellCoin ? <>Cancel</> : <>Sell</>}
        </StyledButton>
      </StyledButtonWrapper>
      <CoinText>Quantity: {coinFormat(userCoin.amount)}</CoinText>
      {sellCoin ? <SellCoinButton coin={userCoin} /> : <></>}

      <CoinText>Average Cost: {coinFormat(userCoin.buyPrice)}</CoinText>

      <CoinText>
        Equality: $
        {coinFormat(
          Math.round(100 * userCoin.amount * fetchSingleCoin.current_price) /
            100
        )}
      </CoinText>
      <CoinText>
        Return: $
        {coinFormat(
          totalReturn(
            userCoin.amount * userCoin.buyPrice,
            percentChange(userCoin.buyPrice, fetchSingleCoin.current_price)
          )
        )}
        ({percentChange(userCoin.buyPrice, fetchSingleCoin.current_price)}%)
      </CoinText>
    </StyledEditCoinMenu>
  );
};

export default EditCoinMenu;
