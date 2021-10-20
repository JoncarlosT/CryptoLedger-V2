import React, { useState } from "react";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";
import {
  StyledAuthPage,
  AuthNavigationWrapper,
  AuthNavigationHeader,
  AuthFormWrapper,
} from "./styles";
import StyledButton from "../../components/StyledButton/StyledButton";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <StyledAuthPage>
      <AuthFormWrapper>
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
            <AuthNavigationHeader>
              Already have an Account ?
            </AuthNavigationHeader>
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
      </AuthFormWrapper>
    </StyledAuthPage>
  );
};

export default AuthPage;
