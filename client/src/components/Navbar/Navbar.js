import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import data from "../../data/coin_storage.json";
import { createFilter } from "react-select";
import { Link } from "react-router-dom/";
import { StyledNavbar, Logo, SearchBar } from "./styles";

const Navbar = () => {
  const history = useHistory();
  const [coinId, setCoinId] = useState("");

  const handleSelect = () => {
    history.push(`/coins/${coinId}`);
  };

  return (
    <StyledNavbar>
      <Logo to="/coins">Home</Logo>
      <SearchBar
        filterOption={createFilter({ ignoreAccents: false })}
        options={data}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        value={coinId}
        onChange={(e) => setCoinId(e.id)}
        onSubmit={handleSelect()}
      />
      <Link to="/auth">User</Link>
    </StyledNavbar>
  );
};

export default Navbar;
