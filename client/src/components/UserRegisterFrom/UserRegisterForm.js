import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";
import StyledButton from "../StyledButton/StyledButton";

const UserRegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const [registerFunction, { loading, error }] = useMutation(REGISTER_USER, {
    variables: {
      name,
      email,
      password,
    },
    onCompleted: (data) => {
      const { token } = data.register;
      localStorage.setItem("auth-token", token);
      localStorage.setItem("user-data", JSON.stringify(data.register));
    },
    update(cache, { data }) {
      cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.register.loggedIn,
          userData: JSON.stringify(data.register),
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
          registerFunction();
          history.push("/coins");
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <StyledButton type="submit">Register</StyledButton>
      </form>
    </div>
  );
};

export default UserRegisterForm;
