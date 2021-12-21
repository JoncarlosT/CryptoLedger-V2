import styled from "styled-components";
import { device } from "../../device";

export const StyledCryptoCoinExtraDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UpperRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const UpperSection = styled.div`
  margin: 30px;
`;

export const LowerSection = styled.div`
  margin-bottom: 50px;
  text-align: center;
  width: 80%;
`;

export const DescriptionSection = styled.div`
  font-size: 22px;
`;
