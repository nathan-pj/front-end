import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="bottom-nav">
      <Link to="/user-profile">
        <div>Profile</div>
      </Link>
      <Link to="/liked-houses">
        <div>House List</div>
      </Link>
      <Link to="/add-property">
        <div>Add property</div>
      </Link>
      <Link to="/settings">
        <div>Settings</div>
      </Link>
    </nav>
  );
}
