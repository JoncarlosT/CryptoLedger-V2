import React from "react";
import CryptoCoinDetail from "../../components/CryptoCoinDetail/CryptoCoinDetail";

const CryptoPage = (props) => {
  return <CryptoCoinDetail coinId={props.match.params.coinId} />;
};

export default CryptoPage;
