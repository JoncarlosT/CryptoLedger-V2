import React from "react";
import { StyledScreenSaver, LogoImage, Header } from "./styles";
import Logo from "../../assets/CL_White_Logo.png";

const ScreenSaver = () => {
  return (
    <StyledScreenSaver>
      <LogoImage src={Logo} alt="Logo" />
      <Header>Will Server You Up In A Second</Header>
    </StyledScreenSaver>
  );
};

export default ScreenSaver;
