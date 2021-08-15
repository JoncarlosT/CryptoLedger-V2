import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";

const LogoutButton = ({ userId }) => {
  const history = useHistory();

  const [logoutFunction, { data, loading, error }] = useMutation(LOGOUT_USER, {
    variables: {
      _id: userId,
    },
    onCompleted: (data) => {
      const { token } = data.logout;
      localStorage.setItem("auth-token", token);
      localStorage.setItem("user-data", JSON.stringify(data.logout));
    },
    update(cache, { data }) {
      console.log(data);

      cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.logout.loggedIn,
          userData: JSON.stringify(data.logout),
        },
      });
    },
  });

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        logoutFunction();
        history.push("/coins");
      }}
    >
      LogoutButton
    </button>
  );
};

export default LogoutButton;
