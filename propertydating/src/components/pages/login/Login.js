import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate, Link } from "react-router-dom";
import Context from "../../../contexts/Context";
import { useAuth0 } from "@auth0/auth0-react";


export const Login = () => {
  const { logout, user, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
     <>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}

{isAuthenticated && (
        <>
          <Link to="/user-profile"><img src={user.picture} alt={user.name} /></Link>
          <button
            onClick={() => logout({ returnTo: "http://localhost:3000/" })}
          >
            Log Out
          </button>
        </>
      )}

    </> 
  );
};

export default Login;
