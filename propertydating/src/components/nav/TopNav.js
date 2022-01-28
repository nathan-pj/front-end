import React, { useContext } from "react";
import Context from "../../contexts/Context";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <nav className="top-nav">
      <div className="top-nav__logo">
        <Link to="/">
          <img src={logo} alt="Property Hook-Up" />
        </Link>
      </div>
      {isAuthenticated && (
        <>
          <img src={user.picture} alt={user.name} />
          <button
            onClick={() => logout({ returnTo: "http://localhost:3000/" })}
          >
            Log Out
          </button>
        </>
      )}

      <div className="top-nav__login"></div>
    </nav>
  );
}
