import React from "react";
import CryptoCoinDetail from "../../components/CryptoCoinDetail/CryptoCoinDetail";
import CryptoCoinChart from "../../components/CryptoCoinChart/CryptoCoinChart";
import { StyledCryptoPage } from "./styles";

const CryptoPage = (props) => {
  const { coinId } = props.match.params;

  return (
    <StyledCryptoPage>
      <CryptoCoinChart coinId={coinId} days={5} full={true} />
      <CryptoCoinDetail coinId={coinId} />;
    </StyledCryptoPage>
  );
};

export default CryptoPage;
