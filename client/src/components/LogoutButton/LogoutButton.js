import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";

const LogoutButton = ({ userId }) => {
  const history = useHistory();

  console.log(userId);

  const [logoutFunction, { loading, error }] = useMutation(LOGOUT_USER, {
    variables: {
      _id: userId,
    },
    onCompleted: (data) => {
      const { token } = data.logout;
      localStorage.setItem("auth-token", token);
      localStorage.setItem("user-data", JSON.stringify(data.logout));
    },
    update(cache, { data }) {
      cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.logout.loggedIn,
          userData: JSON.stringify(data.logout),
        },
      });
    },
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

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
