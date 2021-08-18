import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";
import {
  StyledCryptoCoinDetail,
  CoinHeaderWrapper,
  FinancialWrapper,
  ExtraData,
  CoinImage,
  CoinName,
  CoinSymbol,
} from "./styles";

const CryptoCoinDetail = ({ coinId }) => {
  const coinFormat = (num) => {
    return num >= 100
      ? num.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")
      : num;
  };

  const { loading, data, error } = useQuery(FETCH_SINGLE_COIN, {
    variables: {
      coinId: coinId,
    },
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  const { fetchSingleCoin } = data;
  return (
    <StyledCryptoCoinDetail>
      <CoinHeaderWrapper>
        <CoinImage src={fetchSingleCoin.image} alt="Coin_Image" />
        <CoinName>{fetchSingleCoin.name}</CoinName>
        <CoinSymbol>{fetchSingleCoin.symbol}</CoinSymbol>
      </CoinHeaderWrapper>
      <FinancialWrapper>
        <div>
          <h2>Market Cap: ${coinFormat(fetchSingleCoin.market_cap)}</h2>
        </div>
        <div>
          <h2>Current Price: ${coinFormat(fetchSingleCoin.current_price)}</h2>
        </div>

        <button>ADD COIN</button>
      </FinancialWrapper>
    </StyledCryptoCoinDetail>
  );
};

export default CryptoCoinDetail;
