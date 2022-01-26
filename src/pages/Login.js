import React from "react";
import { Background } from "../components/Background/Background";
import { LoginWindow } from "../components/LoginWindow/LoginWindow";

function Login() {
  return (
    <div className="App">
      <Background content={<LoginWindow />} />
    </div>
  );
}

export default Login;
