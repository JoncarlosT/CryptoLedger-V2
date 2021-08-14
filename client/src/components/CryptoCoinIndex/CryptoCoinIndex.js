import React from "react";
import CryptoCoinChart from "../CryptoCoinChart/CryptoCoinChart";
import { useQuery } from "@apollo/client";
import { FETCH_COINS } from "../../graphql/queries";
import {
  ChartRow,
  ChartBox,
  CoinDetail,
  CoinDetailLink,
  CoinIcon,
} from "./styles";

const CryptoCoinIndex = () => {
  const coinFormat = (num) => {
    return num >= 100
      ? num.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")
      : num;
  };

  const { loading, data, error } = useQuery(FETCH_COINS, {
    variables: {
      num: 10,
    },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  const { fetchCoins } = data;

  return (
    <>
      <ChartRow>
        <ChartBox>Coin</ChartBox>
        <ChartBox>Price</ChartBox>
        <ChartBox>Volume</ChartBox>
        <ChartBox>Market Cap</ChartBox>
        <ChartBox>Coin Chart</ChartBox>
      </ChartRow>

      {fetchCoins.map((coin, idx) => {
        return (
          <CoinDetailLink to={`/coins/${coin.id}`} key={idx}>
            <ChartRow>
              <ChartBox>
                <CoinDetail>
                  <CoinIcon src={coin.image} alt={coin.name} />
                  <div>{coin.name}</div>
                  <div>{coin.symbol}</div>
                </CoinDetail>
              </ChartBox>

              <ChartBox>${coinFormat(coin.current_price)}</ChartBox>
              <ChartBox>${coinFormat(coin.total_volume)}</ChartBox>
              <ChartBox>${coinFormat(coin.market_cap)}</ChartBox>
              <ChartBox>
                <CryptoCoinChart coinId={coin.id} days={7} />
              </ChartBox>
            </ChartRow>
          </CoinDetailLink>
        );
      })}
    </>
  );
};

export default CryptoCoinIndex;
