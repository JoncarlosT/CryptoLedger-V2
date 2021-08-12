import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../../graphql/mutations";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const updateCache = (client, { data }) => {
    client.writeData({
      data: {
        isLoggedIn: data.login.loggedIn,
        cryptoWallet: [...data.login.cryptoWallet],
      },
    });
  };

  return (
    <Mutation
      mutation={LOGIN_USER}
      onCompleted={(data) => {
        const { token } = data.login;
        localStorage.setItem("auth-token", token);
      }}
      update={(client, data) => updateCache(client, data)}
    >
      {(loginUser) => (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginUser({
                variables: {
                  email: email,
                  password: password,
                },
              });
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
      )}
    </Mutation>
  );
};

export default UserLogin;
