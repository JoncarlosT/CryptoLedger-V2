import React, { useState } from "react";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";
import {
  StyledAuthPage,
  AuthNavigationWrapper,
  AuthNavigationHeader,
  AuthFormWrapper,
  AuthSide,
  DetailSide,
  HeaderWrapper,
} from "./styles";
import StyledButton from "../../components/StyledButton/StyledButton";
import Combine_Logo from "../../assets/Combine_Logo.png";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <StyledAuthPage>
      <AuthSide>
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
      </AuthSide>

      <DetailSide>
        <HeaderWrapper>
          <img src={Combine_Logo} alt="Logo" style={{ width: "155px" }} />
          <h1>CryptoLedger will help</h1>
          <h1>you keep track</h1>
          <h1>of 8,000+ coins</h1>
          <h1>and calculate your equality in each</h1>
        </HeaderWrapper>
      </DetailSide>
    </StyledAuthPage>
  );
};

export default AuthPage;
