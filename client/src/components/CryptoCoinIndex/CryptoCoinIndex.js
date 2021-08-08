import React from "react";
import { Query } from "react-apollo";
import { FETCH_COINS } from "../../graphql/queries";
import {
  Chart,
  Coin,
  CoinText,
  ChartHeader,
  CoinImage,
  ChartText,
  CoinDetailsWrapper,
} from "./styles";

const CryptoCoinIndex = ({ numOfCoin }) => {
  return (
    <Query
      query={FETCH_COINS}
      variables={{
        num: 10,
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <h1>Loading</h1>;
        if (error) return <h1>{error}</h1>;

        const { fetchCoins } = data;
        console.log(fetchCoins);

        return (
          <Chart>
            <ChartHeader>
              <ChartText>Coin</ChartText>
              <ChartText>Price</ChartText>
              <ChartText>Volume</ChartText>
              <ChartText>Market Cap</ChartText>
            </ChartHeader>

            {fetchCoins.map((coin, idx) => {
              return (
                <Coin key={idx}>
                  <CoinDetailsWrapper>
                    <CoinImage src={coin.image} alt={coin.name} />
                    <CoinText>{coin.name}</CoinText>
                    <CoinText>{coin.symbol}</CoinText>
                  </CoinDetailsWrapper>

                  <CoinText>{coin.current_price}</CoinText>
                  <CoinText>{coin.total_volume}</CoinText>
                  <CoinText>{coin.market_cap}</CoinText>
                </Coin>
              );
            })}
          </Chart>
        );
      }}
    </Query>
  );
};

export default CryptoCoinIndex;
