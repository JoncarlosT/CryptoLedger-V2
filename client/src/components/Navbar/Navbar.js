import React from "react";
import data from "../../data/coin_storage.json";

import { StyledNavbar, Logo, SearchBar } from "./styles";

const Navbar = () => {
  console.log(data);
  return (
    <StyledNavbar>
      <Logo to="/">Home</Logo>
      <SearchBar options={data} />
    </StyledNavbar>
  );
};

export default Navbar;
