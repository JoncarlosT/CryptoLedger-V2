import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const [loginFunction, { data, loading, error }] = useMutation(LOGIN_USER, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: (data) => {
      console.log(data.login);
      const { token } = data.login;
      localStorage.setItem("auth-token", token);
      localStorage.setItem("user-data", JSON.stringify(data.login));
    },
    update(cache, { data }) {
      cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.login.loggedIn,
        },
      });
    },
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginFunction();
          history.push("/coins");
        }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //   type="password"
          placeholder="Password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default UserLogin;
