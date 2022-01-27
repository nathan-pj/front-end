import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Context from "../../../contexts/Context";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
};

export default Login;
