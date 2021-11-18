import styled from "styled-components";
import { Link } from "react-router-dom";
import Select from "react-select";

export const StyledNavbar = styled.div`
  background: none;
  height: 60px;
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: space-evenly;
  background-color: #191a19;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const LogoImage = styled.img`
  width: 155px;
`;

export const MobileLogoImage = styled.img`
  width: 60px;
`;

export const SearchBar = styled(Select)`
  width: 500px;
  height: 2em;
  z-index: 9999;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
