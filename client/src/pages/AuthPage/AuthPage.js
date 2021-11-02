import React, { useState } from "react";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";
import {
  StyledAuthPage,
  AuthNavigationWrapper,
  AuthNavigationHeader,
  AuthFormWrapper,
  LeftSide,
  RightSide,
  HeaderWrapper,
} from "./styles";
import StyledButton from "../../components/StyledButton/StyledButton";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <StyledAuthPage>
      <LeftSide>
        <HeaderWrapper>
          <h1>CryptoLedger will help</h1>
          <h1>you keep track</h1>
          <h1>of 8,000+ coins</h1>
          <h1>and calculate your equality in each</h1>
        </HeaderWrapper>
      </LeftSide>
      <RightSide>
        <AuthFormWrapper>
          <div>
            {LoginFormRender ? <UserLoginForm /> : <UserRegisterForm />}
          </div>

          {LoginFormRender ? (
            <AuthNavigationWrapper>
              <AuthNavigationHeader>
                Don't have an account ?
              </AuthNavigationHeader>
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
      </RightSide>
    </StyledAuthPage>
  );
};

export default AuthPage;
