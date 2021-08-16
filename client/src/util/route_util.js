import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../graphql/queries";

const AuthUserRoute = ({ component: Component, path, routeType, ...rest }) => {
  const { data } = useQuery(IS_LOGGED_IN);

  if (routeType === "auth") {
    return (
      <Route
        path={path}
        render={(props) =>
          data.isLoggedIn ? (
            <Component {...props} userData={JSON.parse(data.userData)} />
          ) : (
            <Redirect to="/auth" />
          )
        }
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          data.isLoggedIn ? <Component {...props} /> : <Redirect to="/auth" />
        }
      />
    );
  }
};

export default AuthUserRoute;
