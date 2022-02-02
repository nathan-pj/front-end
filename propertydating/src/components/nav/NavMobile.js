import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../contexts/Context";

export default function NavMobile() {
  const { likedHouses, loggedInUser } = useContext(Context);

  return (
    <nav className="bottom-nav mobile">
      <Link to={`/user-profile`}>
        <div><i class="fa fa-user" aria-hidden="true"></i></div>
      </Link>
      <Link to={`/liked-houses`}>
        <div className="bottom-nav__houseList">
        <i class="fa fa-list" aria-hidden="true"></i>
          {likedHouses.length > 0 ? (
            <div className="bottom-nav__houseList__count">
              {likedHouses.length}
            </div>
          ) : null}
        </div>
      </Link>
      <Link to="/add-property">
        <div><i class="fa fa-plus" aria-hidden="true"></i></div>
      </Link>
      <Link to={`/settings`}>
        <div><i class="fa fa-cog" aria-hidden="true"></i></div>
      </Link>
    </nav>
  );
}



