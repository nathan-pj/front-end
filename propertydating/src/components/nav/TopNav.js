import React, { useContext } from "react";
import Context from "../../contexts/Context";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Nav() {
  const { loggedInUser, setLoggedInUser, setShowLoginModal} = useContext(Context);

  const handleLogout = () => {
    setShowLoginModal(true);
    setLoggedInUser({})
  }

  return (
    <nav className="top-nav">
      <div className="top-nav__logo">
        <Link to="/">
          <img src={logo} alt="Property Hook-Up" />
        </Link>
      </div>

      <div className="top-nav__login">
        <button onClick={handleLogout}>Logout</button>
        <Link to={`/user-profile/${loggedInUser.user_id}`}>
          <img src={`${loggedInUser.profilepic}`} />
        </Link>
      </div>
    </nav>
  );
}
