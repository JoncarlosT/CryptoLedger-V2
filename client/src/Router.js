import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CryptoPage from "./pages/CryptoPage/CryptoPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import UserPage from "./pages/UserPage/UserPage";
import AuthUserRoute from "./util/route_util";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/coins" exact component={LandingPage} />
        <Route path="/coins/:coinId" component={CryptoPage} />
        <Route path="/auth" component={AuthPage} />
        <AuthUserRoute path="/user" component={UserPage} routeType="auth" />
        {/* <Route path="/user" component={UserPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}
