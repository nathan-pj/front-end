import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context";

export default function Nav() {
  const { likedHouses, loggedInUser } = useContext(Context);

  return (
    <nav className="bottom-nav">
      <Link to={`/user-profile/${loggedInUser.user_id}`}>
        <div>Profile</div>
      </Link>
      <Link to={`/liked-houses/${loggedInUser.user_id}`}>
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
      <Link to={`/settings/${loggedInUser.user_id}`}>
        <div>Settings</div>
      </Link>
    </nav>
  );
}
