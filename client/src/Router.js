import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CryptoPage from "./pages/CryptoPage/CryptoPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/coins/:coinId" component={CryptoPage} />
      </Switch>
    </BrowserRouter>
  );
}
