import React from "react";
import Router from "./Router";

import styled from "styled-components";

export default function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

const styledApp = styled.div`
  margin: 0;

  padding: 0;

  border: 0;
`;
