import styled from "styled-components";
import { device } from "../../device";

export const StyledCryptoPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media ${device.tablet} {
    flex-direction: row;
    width: 75%;
  }
`;

export const ChartWrapper = styled.div`
  padding-top: 50px;
  width: inherit;
`;

export const CoinDetailWrapper = styled.div``;
