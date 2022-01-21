import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import AddCoinMenu from "../AddCoinMenu/AddCoinMenu";
import coinFormat from "../../util/coinFormat";
import { FETCH_SINGLE_COIN, IS_LOGGED_IN } from "../../graphql/queries";
import {
  StyledCryptoCoinDetail,
  CoinHeaderWrapper,
  FinancialWrapper,
  CoinImage,
  CoinName,
  CoinSymbol,
} from "./styles";
import StyledButton from "../StyledButton/StyledButton";

const CryptoCoinDetail = ({ coinId }) => {
  const [ShowCoinMenu, setShowCoinMenu] = useState(false);

  const loggedInData = useQuery(IS_LOGGED_IN);

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
        {loggedInData.data.isLoggedIn ? (
          ShowCoinMenu ? (
            <>
              <AddCoinMenu
                coinData={fetchSingleCoin}
                userData={JSON.parse(loggedInData.data.userData)}
              />
              <StyledButton onClick={() => setShowCoinMenu(!ShowCoinMenu)}>
                Close
              </StyledButton>
            </>
          ) : (
            <StyledButton onClick={() => setShowCoinMenu(!ShowCoinMenu)}>
              Add Coin
            </StyledButton>
          )
        ) : (
          <div>
            <h4 style={{ margin: 0, paddingTop: "10px" }}>
              Log in to add to wallet
            </h4>
          </div>
        )}
      </FinancialWrapper>
    </StyledCryptoCoinDetail>
  );
};

export default CryptoCoinDetail;
