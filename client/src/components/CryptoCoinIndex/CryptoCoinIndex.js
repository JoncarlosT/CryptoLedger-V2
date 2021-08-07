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
} from "./styles";

const CryptoCoinIndex = ({ numOfCoin }) => {
  return (
    <Query
      query={FETCH_COINS}
      variables={{
        num: numOfCoin,
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
              <ChartText>volume</ChartText>
            </ChartHeader>

            {fetchCoins.map((coin, idx) => {
              return (
                <Coin key={idx}>
                  <CoinImage src={coin.image} alt={coin.name} />
                  <ChartText>{coin.name}</ChartText>
                  <ChartText>{coin.symbol}</ChartText>
                  <ChartText>{coin.current_price}</ChartText>
                  <ChartText>{coin.total_volume}</ChartText>
                  <ChartText>{coin.market_cap}</ChartText>
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
