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
          <LandingPageText>Welcome To CryptoLedger</LandingPageText>
          <LandingPageText>
            We'll Help You Keep Track of All Cryptocurrencies
          </LandingPageText>
        </LandingPageHeader>

        <CryptoCoinIndex />
      </CryptoCoinIndexWrapper>
    </StyledLandingPage>
  );
}
