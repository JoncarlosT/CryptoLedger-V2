import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import coinData from "../../data/coin_storage.json";
import { createFilter } from "react-select";
import { Link } from "react-router-dom/";
import { StyledNavbar, Logo, SearchBar } from "./styles";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../../graphql/queries";

const Navbar = () => {
  const history = useHistory();
  const [coinId, setCoinId] = useState("");

  const handleSelect = () => {
    history.push(`/coins/${coinId}`);
  };

  const { data } = useQuery(IS_LOGGED_IN);

  console.log(data);

  return (
    <StyledNavbar>
      <Logo to="/coins">Home</Logo>
      <SearchBar
        filterOption={createFilter({ ignoreAccents: false })}
        options={coinData}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        value={coinId}
        onChange={(e) => setCoinId(e.id)}
        onSubmit={handleSelect()}
      />
      <Link to="/auth">Log In</Link>
    </StyledNavbar>
  );
};

export default Navbar;
