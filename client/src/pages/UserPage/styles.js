import styled from "styled-components";
import { device } from "../../device";

export const StyledUserPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserCryptoChart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  font-size: 0.8rem;

  @media ${device.tablet} {
    flex-direction: row;
    width: 75%;
  }
`;

export const EditCoinMenuWrapper = styled.div`
  /* width: 400px; */
`;

export const ChartWrapper = styled.div`
  /* height: 500px; */
  width: inherit;
`;

export const UserName = styled.span`
  text-transform: capitalize;
`;
