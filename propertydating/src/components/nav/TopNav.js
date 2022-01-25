import React, { useContext } from "react";
import Context from '../../contexts/Context';

export default function Nav() {

    const { loggedInUser } = useContext(Context);

  return (
    <nav className="top-nav">
      <div className="top-nav__logo">
        <h1>App Name/Logo</h1>
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
