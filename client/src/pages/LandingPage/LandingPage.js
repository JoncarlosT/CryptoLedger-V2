import React from "react";

import CryptoCoinIndex from "../../components/CryptoCoinIndex/CryptoCoinIndex";

import {
  StyledLandingPage,
  CryptoCoinIndexWrapper,
  LandingPageText,
  LandingPageHeader,
} from "./styles";

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <CryptoCoinIndexWrapper>
        <LandingPageHeader>
          <LandingPageText>Welcome to CryptoLedger</LandingPageText>
          <LandingPageText>
            We'll help you keep track of all crypto Cryptocurrencies
          </LandingPageText>
        </LandingPageHeader>

        <CryptoCoinIndex />
      </CryptoCoinIndexWrapper>
    </StyledLandingPage>
  );
}
