import styled from "styled-components";
import { Link } from "react-router-dom";
import Select from "react-select";

export const ChartRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: dotted 1px grey;
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
  width: inherit;
  height: inherit;
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
  align-items: center;
`;

export const PageNumSelector = styled(Select)`
  width: 130px;
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
