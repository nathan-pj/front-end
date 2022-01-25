import React, { useContext } from "react";
import Context from '../../contexts/Context';

import logo from '../../images/logo.png';

export default function Nav() {

    const { loggedInUser } = useContext(Context);

  return (
    <nav className="top-nav">
      <div className="top-nav__logo">
        <img src={logo} alt="Property Hook-Up" />
      </div>
      <div className="top-nav__login">
          <button>
            Logout
          </button>
          <img src={`${loggedInUser.profilepic}`} />
      </div>
    </nav>
  );
}
