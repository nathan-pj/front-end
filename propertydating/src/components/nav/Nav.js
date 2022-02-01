import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const { likedHouses, loggedInUser } = useContext(Context);
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
    { isAuthenticated && <nav className="bottom-nav">
     <Link to={`/user-profile/${user.sub}`}>
        <div>Profile</div>
      </Link>
      <Link to={`/liked-houses`}>
        <div className="bottom-nav__houseList">
          House List
          {likedHouses.length > 0 ? (
            <div className="bottom-nav__houseList__count">
              {likedHouses.length}
            </div>
          ) : null}
        </div>
      </Link>
      <Link to="/add-property">
        <div>Add property</div>
      </Link>
      <Link to={`/settings`}>
        <div>Settings</div>
      </Link>
    </nav> }
    </>
  );
}
