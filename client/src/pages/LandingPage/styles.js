import styled from "styled-components";
import { device } from "../../device";

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CryptoCoinIndexWrapper = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 70%;
  }
`;

export const LandingPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const LandingPageText = styled.h1`
  text-align: center;
`;
