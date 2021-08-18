import React, { useState } from "react";
import CryptoCoinDetail from "../../components/CryptoCoinDetail/CryptoCoinDetail";
import CryptoCoinChart from "../../components/CryptoCoinChart/CryptoCoinChart";
import CryptoCoinExtraDetail from "../../components/CryptoCoinExtraDetail/CryptoCoinExtraDetail";
import {
  StyledCryptoPage,
  CoinWrapper,
  CoinDetailWrapper,
  ChartSelector,
  ChartWrapper,
} from "./styles";

const CryptoPage = (props) => {
  const [days, setDays] = useState(7);

  const { coinId } = props.match.params;

  const daysOption = [
    { value: 1, label: "1 Day" },
    { value: 5, label: "5 Days" },
    { value: 7, label: "7 Days" },
    { value: 10, label: "10 Days" },
    { value: 15, label: "15 Days" },
    { value: 30, label: "30 Days" },
  ];

  return (
    <StyledCryptoPage>
      <CoinWrapper>
        <CryptoCoinDetail coinId={coinId} />
        <ChartWrapper>
          <ChartSelector
            defaultValue={days[1]}
            options={daysOption}
            placeholder="7 Days"
            onChange={(e) => {
              setDays(e.value);
            }}
          />
          <CryptoCoinChart coinId={coinId} days={days} full={true} />
        </ChartWrapper>
      </CoinWrapper>
      <CoinDetailWrapper>
        <CryptoCoinExtraDetail coinId={coinId} />
      </CoinDetailWrapper>
    </StyledCryptoPage>
  );
};

export default CryptoPage;
