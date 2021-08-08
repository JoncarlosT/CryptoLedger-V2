import React, { useState } from "react";

import CryptoCoinIndex from "../../components/CryptoCoinIndex/CryptoCoinIndex";

import { StyledLandingPage, CryptoCoinIndexWrapper } from "./styles";

export default function LandingPage() {
  const [numOfCoin, setNumOfCoin] = useState(5);

  return (
    <StyledLandingPage>
      <CryptoCoinIndexWrapper>
        <CryptoCoinIndex />
      </CryptoCoinIndexWrapper>
    </StyledLandingPage>
  );
}
