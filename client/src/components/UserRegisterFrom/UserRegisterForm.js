import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";
import {
  StyledUserRegisterForm,
  RegisterForm,
  RegisterFormInput,
  RegisterFormTitle,
  RegisterFormChild,
} from "./styles";
import StyledButton from "../StyledButton/StyledButton";

const UserRegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const [registerFunction, { loading, error }] = useMutation(REGISTER_USER, {
    variables: {
      name,
      email,
      password,
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
    onCompleted: (data) => {
      const { token } = data.register;
      localStorage.setItem("auth-token", token);
      localStorage.setItem("user-data", JSON.stringify(data.register));
      history.push("/");
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

  return (
    <StyledUserRegisterForm>
      <RegisterForm
        onSubmit={(e) => {
          e.preventDefault();
          registerFunction();
        }}
      >
        <RegisterFormChild>
          <RegisterFormTitle>Name</RegisterFormTitle>
          <RegisterFormInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </RegisterFormChild>
        <RegisterFormChild>
          <RegisterFormTitle>Email</RegisterFormTitle>
          <RegisterFormInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </RegisterFormChild>
        <RegisterFormChild>
          <RegisterFormTitle>Password</RegisterFormTitle>
          <RegisterFormInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
        </RegisterFormChild>
        <RegisterFormChild>
          <StyledButton type="submit">Register</StyledButton>
        </RegisterFormChild>
        <RegisterFormChild>
          {error ? `Submission error! ${errorMessage}` : <></>}
        </RegisterFormChild>
      </RegisterForm>
    </StyledUserRegisterForm>
  );
};

export default UserRegisterForm;
