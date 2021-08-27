import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import coinData from "../../data/coin_storage.json";
import { createFilter } from "react-select";
import Logo from "../../assets/CL_Logo.png";
import {
  StyledNavbar,
  NavLink,
  SearchBar,
  LogoImage,
  ButtonWrapper,
} from "./styles";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../../graphql/queries";
import StyledButton from "../StyledButton/StyledButton";
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
      <NavLink to="/coins">
        <LogoImage src={Logo} alt="Logo" />
      </NavLink>
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
        <ButtonWrapper>
          <NavLink to="/user">
            <StyledButton width={"100px"}>Wallet</StyledButton>
          </NavLink>
          <LogoutButton userId={JSON.parse(data.userData)._id} />
        </ButtonWrapper>
      ) : (
        <NavLink to="/auth">
          <StyledButton width={"100px"}>Log In</StyledButton>
        </NavLink>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
