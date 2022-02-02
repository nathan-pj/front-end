import React, { useContext } from "react";
import Context from "../../contexts/Context";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import Login from '../pages/login/Login';

export default function TopNavMobile() {
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <nav className="top-nav mobile">
      <div className="top-nav__logo">
        <Link to="/">
          <img src={logo} alt="Property Hook-Up" />
        </Link>
      </div>

      <div className="top-nav__login">
<Login />

      
      </div>
    </nav>
  );
}
