import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";
import {
  StyledUserLoginForm,
  LoginForm,
  LoginFormInput,
  LoginFormTitle,
} from "./styles";
import StyledButton from "../StyledButton/StyledButton";

const UserLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const [loginFunction, { loading, error }] = useMutation(LOGIN_USER, {
    variables: {
      email,
      password,
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
    onCompleted: (data) => {
      const { token } = data.login;
      localStorage.setItem("auth-token", token);
      localStorage.setItem("user-data", JSON.stringify(data.login));
      history.push("/coins");
    },
    update(cache, { data }) {
      cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.login.loggedIn,
          userData: JSON.stringify(data.login),
        },
      });
    },
  });

  if (loading) return "Submitting...";

  return (
    <StyledUserLoginForm>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          loginFunction();
        }}
      >
        <div>
          <LoginFormTitle>Email</LoginFormTitle>
          <LoginFormInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <LoginFormTitle>Password</LoginFormTitle>
          <LoginFormInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <StyledButton type="submit">Log In</StyledButton>
        <div>{error ? `Submission error! ${errorMessage}` : <></>}</div>
      </LoginForm>
    </StyledUserLoginForm>
  );
};

export default UserLoginForm;
