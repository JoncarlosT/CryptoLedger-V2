import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CryptoPage from "./pages/CryptoPage/CryptoPage";
import AuthPage from "./pages/AuthPage/AuthPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/coins/:coinId" component={CryptoPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}
