import styled from "styled-components";
import { Link } from "react-router-dom/";
import Select from "react-select";

export const StyledNavbar = styled.div`
  background: none;
  height: 60px;
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled(Link)`
  text-decoration: none;
`;

export const SearchBar = styled(Select)`
  width: 200px;
  height: 3em;
`;
