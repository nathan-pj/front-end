import React, { useContext } from "react";
import Context from "../../contexts/Context";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Nav() {
  const { loggedInUser } = useContext(Context);

  return (
    <nav className="top-nav">
      <div className="top-nav__logo">
        <Link to="/">
          <img src={logo} alt="Property Hook-Up" />
        </Link>
      </div>

      <div className="top-nav__login">
        <button>Logout</button>
        <Link to="/user-profile">
          <img src={`${loggedInUser.profilepic}`} />
        </Link>
      </div>
    </nav>
  );
}
