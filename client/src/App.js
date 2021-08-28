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
  background-color: #ebebeb;
`;
