import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../src/App.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <div className="login-button" onClick={() => loginWithRedirect()}>Log In
    </div>
    </>
  )
};

export default LoginButton;