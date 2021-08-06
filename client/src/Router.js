import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}
