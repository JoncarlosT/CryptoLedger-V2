import React, { useState } from "react";

import UserLoginForm from "../../components/UserLogin/UserLoginForm";
import UserRegisterForm from "../../components/UserRegisterFrom/UserRegisterForm";

const AuthPage = () => {
  const [LoginFormRender, setLoginFormRender] = useState(true);

  return (
    <div>
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
    </div>
  );
};

export default AuthPage;
