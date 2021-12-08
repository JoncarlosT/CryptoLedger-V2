import styled from "styled-components";
import { Link } from "react-router-dom";
import Select from "react-select";
import { device } from "../../device";

export const ChartRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: dotted 1px grey;
  color: white;
`;

export const ChartBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 200px;
`;

export const CoinDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: inherit;

  @media ${device.tablet} {
    width: inherit;
  }
`;

export const CoinDetailLink = styled(Link)`
  text-decoration: none;
  color: #000;
  :hover {
    color: red;
  }
`;

export const CoinIcon = styled.img`
  width: 40px;
`;

export const Footer = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const PageNumSelector = styled(Select)`
  width: 130px;
  height: 3em;
`;

export const NumberOfCoinsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigatorWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PageNumber = styled.h1`
  padding-left: 50px;
  padding-right: 50px;
`;
