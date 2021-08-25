import React, { useState } from "react";
import CryptoCoinChart from "../CryptoCoinChart/CryptoCoinChart";
import { useQuery } from "@apollo/client";
import coinFormat from "../../util/coinFormat";
import { FETCH_COINS } from "../../graphql/queries";
import {
  ChartRow,
  ChartBox,
  CoinDetail,
  CoinDetailLink,
  CoinIcon,
  Footer,
  PageNumSelector,
} from "./styles";

const CryptoCoinIndex = () => {
  const [numOfCoins, setNumOfCoins] = useState(10);
  const [pageNum, setPageNum] = useState(1);

  const NumOfCoinsOptions = [
    { value: 5, label: "5 Coins" },
    { value: 10, label: "10 Coins" },
    { value: 20, label: "20 Coins" },
  ];

  const { loading, data, error } = useQuery(FETCH_COINS, {
    variables: {
      numOfCoins,
      pageNum,
    },
  });

  if (loading) return <div>Welcome To CryptoLedger</div>;
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
                <CryptoCoinChart
                  coinId={coin.id}
                  days={7}
                  height={250}
                  width={650}
                />
              </ChartBox>
            </ChartRow>
          </CoinDetailLink>
        );
      })}

      <Footer>
        Number of Coins
        <PageNumSelector
          options={NumOfCoinsOptions}
          onChange={(e) => {
            setNumOfCoins(e.value);
          }}
        />
        <div>
          <button
            onClick={(e) => {
              if (pageNum === 1) {
              } else {
                setPageNum(pageNum - 1);
              }
            }}
          >
            Left
          </button>
          {pageNum}
          <button
            onClick={(e) => {
              setPageNum(pageNum + 1);
            }}
          >
            Right
          </button>
        </div>
      </Footer>
    </>
  );
};

export default CryptoCoinIndex;
