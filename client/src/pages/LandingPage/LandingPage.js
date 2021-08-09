import React from "react";

import CryptoCoinIndex from "../../components/CryptoCoinIndex/CryptoCoinIndex";

import { StyledLandingPage, CryptoCoinIndexWrapper } from "./styles";

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <CryptoCoinIndexWrapper>
        <CryptoCoinIndex />
      </CryptoCoinIndexWrapper>
    </StyledLandingPage>
  );
}
