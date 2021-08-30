import React, { useState } from "react";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";
import { StyledCryptoCoinChart } from "./styles";
import StyledButton from "../../components/StyledButton/StyledButton";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <StyledCryptoCoinChart>
      {LoginFormRender ? (
        <StyledButton
          width={"110px"}
          onClick={(e) => {
            e.preventDefault();
            setLoginFormRender(!LoginFormRender);
          }}
        >
          Register
        </StyledButton>
      ) : (
        <StyledButton
          width={"90px"}
          onClick={(e) => {
            e.preventDefault();
            setLoginFormRender(!LoginFormRender);
          }}
        >
          Login
        </StyledButton>
      )}

      <div style={{ backgroundColor: "red" }}>
        {LoginFormRender ? <UserLoginForm /> : <UserRegisterForm />}
      </div>
    </StyledCryptoCoinChart>
  );
};

export default AuthPage;
