import React, { useState } from "react";
import Select from "react-select";
import CryptoCoinDetail from "../../components/CryptoCoinDetail/CryptoCoinDetail";
import CryptoCoinChart from "../../components/CryptoCoinChart/CryptoCoinChart";
import { StyledCryptoPage } from "./styles";

const CryptoPage = (props) => {
  const [days, setDays] = useState(7);

  const { coinId } = props.match.params;

  const daysOption = [
    { value: 1, label: "1 Day" },
    { value: 5, label: "5 Days" },
    { value: 10, label: "10 Days" },
    { value: 15, label: "15 Days" },
    { value: 30, label: "30 Days" },
  ];

  return (
    <StyledCryptoPage>
      <Select
        defaultValue={days[1]}
        options={daysOption}
        placeholder="5 days"
        onChange={(e) => {
          setDays(e.value);
        }}
      />
      <CryptoCoinChart coinId={coinId} days={days} full={true} />
      <CryptoCoinDetail coinId={coinId} />;
    </StyledCryptoPage>
  );
};

export default CryptoPage;
