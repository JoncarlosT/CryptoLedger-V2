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
  width: 95%;
  margin-bottom: 100px;
  font-size: 0.8rem;

  @media ${device.laptop} {
    flex-direction: row;
    width: 75%;
  }
`;

export const EditCoinMenuWrapper = styled.div``;

export const ChartWrapper = styled.div`
  width: inherit;
`;

export const UserName = styled.span`
  text-transform: capitalize;
`;
