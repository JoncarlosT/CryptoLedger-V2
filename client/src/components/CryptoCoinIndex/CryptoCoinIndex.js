import React from "react";
import { Query } from "react-apollo";
import CryptoCoinChart from "../CryptoCoinChart/CryptoCoinChart";
import { FETCH_COINS } from "../../graphql/queries";
import { ChartRow, ChartBox, CoinDetail, CoinIcon } from "./styles";

const CryptoCoinIndex = () => {
  const coinFormat = (num) => {
    return num >= 100
      ? num.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")
      : num;
  };

  return (
    <Query
      query={FETCH_COINS}
      variables={{
        num: 30,
      }}
    >
      {({ loading, error, data }) => {
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
                <ChartRow key={idx}>
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
              );
            })}
          </>
        );
      }}
    </Query>
  );
};

export default CryptoCoinIndex;
