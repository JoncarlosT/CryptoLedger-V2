import React, { useState } from "react";
import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";
import { StyledCryptoCoinChart } from "./styles";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <StyledCryptoCoinChart>
      {LoginFormRender ? <UserLoginForm /> : <UserRegisterForm />}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLoginFormRender(!LoginFormRender);
          }}
        >
          Register
        </button>
      </div>
    </StyledCryptoCoinChart>
  );
};

export default AuthPage;
