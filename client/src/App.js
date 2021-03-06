import React from "react";
import Router from "./Router";
import styled from "styled-components";

export default function App() {
  return (
    <StyledApp>
      <Router />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  font-family: "Pontano Sans", sans-serif;
  color: white;
`;
