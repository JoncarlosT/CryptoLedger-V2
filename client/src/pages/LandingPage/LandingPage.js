import React, { useState } from "react";

import CryptoCoinIndex from "../../components/CryptoCoinIndex";

import { StyledLandingPage } from "./styles";

export default function LandingPage() {
  const [numOfCoin, setNumOfCoin] = useState(5);

  return (
    <StyledLandingPage>
      <CryptoCoinIndex numOfCoin={numOfCoin} />
    </StyledLandingPage>
  );
}
