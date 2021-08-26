import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import coinData from "../../data/coin_storage.json";
import { createFilter } from "react-select";
import { Link } from "react-router-dom/";
import Logo from "../../assets/CL_Logo.png";
import { StyledNavbar, LogoLink, SearchBar, LogoImage } from "./styles";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../../graphql/queries";
import LogoutButton from "../LogoutButton/LogoutButton";

const Navbar = () => {
  const history = useHistory();
  const [coinId, setCoinId] = useState("");

  const handleSelect = () => {
    history.push(`/coins/${coinId}`);
  };

  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <StyledNavbar>
      <LogoLink to="/coins">
        <LogoImage src={Logo} alt="Logo" />
      </LogoLink>
      <SearchBar
        filterOption={createFilter({ ignoreAccents: false })}
        options={coinData}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        value={coinId}
        onChange={(e) => setCoinId(e.id)}
        onSubmit={handleSelect()}
      />

      {data.isLoggedIn ? (
        <>
          <Link to="/user">User</Link>
          <LogoutButton userId={JSON.parse(data.userData)._id} />
        </>
      ) : (
        <Link to="/auth">Log In</Link>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
