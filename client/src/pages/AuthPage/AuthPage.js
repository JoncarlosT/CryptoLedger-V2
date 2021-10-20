import React, { useState } from "react";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";
import {
  StyledCryptoCoinChart,
  AuthNavigationWrapper,
  AuthNavigationHeader,
} from "./styles";
import StyledButton from "../../components/StyledButton/StyledButton";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <StyledCryptoCoinChart>
      <div>{LoginFormRender ? <UserLoginForm /> : <UserRegisterForm />}</div>

      {LoginFormRender ? (
        <AuthNavigationWrapper>
          <AuthNavigationHeader>Don't have an account ?</AuthNavigationHeader>
          <StyledButton
            width={"110px"}
            onClick={(e) => {
              e.preventDefault();
              setLoginFormRender(!LoginFormRender);
            }}
          >
            Register
          </StyledButton>
        </AuthNavigationWrapper>
      ) : (
        <AuthNavigationWrapper>
          <AuthNavigationHeader>Already have an Account ?</AuthNavigationHeader>
          <StyledButton
            width={"90px"}
            onClick={(e) => {
              e.preventDefault();
              setLoginFormRender(!LoginFormRender);
            }}
          >
            Login
          </StyledButton>
        </AuthNavigationWrapper>
      )}
    </StyledCryptoCoinChart>
  );
};

export default AuthPage;
