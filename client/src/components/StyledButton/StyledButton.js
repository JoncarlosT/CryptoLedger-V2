import React from "react";
import { StyledButtonDiv, Span } from "./styles";

const StyledButton = ({ children, onClick, height, width }) => {
  return (
    <StyledButtonDiv style={{ height, width }} onClick={onClick}>
      <Span>{children}</Span>
    </StyledButtonDiv>
  );
};

export default StyledButton;
