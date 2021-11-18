import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import coinData from "../../data/coin_storage.json";
import { createFilter } from "react-select";

import {
  StyledNavbar,
  NavLink,
  SearchBar,
  LogoImage,
  ButtonWrapper,
  MobileLogoImage,
} from "./styles";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../../graphql/queries";
import StyledButton from "../StyledButton/StyledButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { size } from "../../device";
import Combine_Logo from "../../assets/Combine_Logo.png";
import Logo from "../../assets/CL_White_Logo.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const history = useHistory();

  const { data } = useQuery(IS_LOGGED_IN);

  const checkPageSize = () => {
    if (window.innerWidth > parseInt(size.mobileL)) setMobile(true);
    else setMobile(false);
  };

  useEffect(() => {
    checkPageSize();
  }, []);

  window.addEventListener("resize", checkPageSize);

  return (
    <StyledNavbar>
      {mobile ? (
        <NavLink to="/">
          <LogoImage src={Logo} alt="Logo" />
        </NavLink>
      ) : (
        <NavLink to="/">
          <MobileLogoImage src={Combine_Logo} alt="Logo" />
        </NavLink>
      )}

      <SearchBar
        filterOption={createFilter({ ignoreAccents: false })}
        options={coinData}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        value={"Search Coin"}
        onChange={(e) => {
          history.push(`/coins/${e.id}`);
        }}
        placeholder={"Search Coin"}
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
