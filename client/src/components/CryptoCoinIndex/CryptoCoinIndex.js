import React from "react";
import { Query } from "react-apollo";
import { FETCH_COINS } from "../../graphql/queries";
import { StyledCoin, StyledCoinText, StyledCoinImage } from "./styles";

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
          <div>
            {fetchCoins.map((coin, idx) => {
              return (
                <StyledCoin key={idx}>
                  <StyledCoinImage src={coin.image} alt={coin.name} />
                  <StyledCoinText>{coin.name}</StyledCoinText>
                  <StyledCoinText>{coin.symbol}</StyledCoinText>
                  <StyledCoinText>{coin.total_volume}</StyledCoinText>
                </StyledCoin>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default CryptoCoinIndex;
