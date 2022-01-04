import styled from "styled-components";
import { Link } from "react-router-dom";
import Select from "react-select";

export const StyledNavbar = styled.div`
  background: none;
  height: 60px;
  display: flex;
  padding: 1em;
  align-items: center;
  width: 90vw;
  justify-content: space-evenly;
  background-color: #191a19;
  background-color: red;
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
  color: black;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const MobileIcon = styled.button`
  background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
  border-radius: 0.12em;
  box-sizing: border-box;
  color: #00a84f;
  display: block;
  height: 45px;
  font-size: 1.4em;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 2em;
  z-index: 2;
  border-style: none;

  :hover {
    color: #ebebeb;
  }
`;

export const Span = styled.span`
  align-items: center;
  background: #191a19;
  border-radius: 0.12em;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;

  :hover {
    background: transparent;
  }
`;

export const MobileMenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
