import React from "react";
import CryptoCoinDetail from "../../components/CryptoCoinDetail/CryptoCoinDetail";
import CryptoCoinChart from "../../components/CryptoCoinChart/CryptoCoinChart";
import CryptoCoinExtraDetail from "../../components/CryptoCoinExtraDetail/CryptoCoinExtraDetail";
import {
  StyledCryptoPage,
  CoinWrapper,
  CoinDetailWrapper,
  ChartWrapper,
} from "./styles";

const CryptoPage = (props) => {
  const { coinId } = props.match.params;

  return (
    <StyledCryptoPage>
      <CoinWrapper>
        <CryptoCoinDetail coinId={coinId} />
        <ChartWrapper>
          <CryptoCoinChart coinId={coinId} full={true} />
        </ChartWrapper>
      </CoinWrapper>
      <CoinDetailWrapper>
        <CryptoCoinExtraDetail coinId={coinId} />
      </CoinDetailWrapper>
    </StyledCryptoPage>
  );
};

export default CryptoPage;
