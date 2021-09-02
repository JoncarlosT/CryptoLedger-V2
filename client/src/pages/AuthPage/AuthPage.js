import React, { useState } from "react";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";
import { StyledCryptoCoinChart, AuthNavigationWrapper } from "./styles";
import StyledButton from "../../components/StyledButton/StyledButton";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <StyledCryptoCoinChart>
      <div>{LoginFormRender ? <UserLoginForm /> : <UserRegisterForm />}</div>

      {LoginFormRender ? (
        <AuthNavigationWrapper>
          <h1>Dont have an account ? </h1>
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
          <h1>Already have an Account ?</h1>
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
