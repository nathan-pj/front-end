import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Context from "../../../contexts/Context";

const Login = () => {
    let navigate = useNavigate();

  const { loggedOutUser, setLoggedOutUser, loggedInUser, setLoggedInUser,  showLoginModal,
    setShowLoginModal } =
    useContext(Context);
 
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setLoggedOutUser(false)
    const user = {
        username: "River.Kutch",
        user_id: 0,
        password: "molli",
        firstname: "Vickie",
        secondname: "Fisher",
        email: "Rebeka.Rowe@hotmail.com",
        profilepic:
          "https://pbs.twimg.com/profile_images/1176237957851881472/CHOXLj9b_400x400.jpg",
      }
    setLoggedInUser(user);
    navigate(`/`);
  };

  return ReactDOM.createPortal(
      <>
    {showLoginModal && <div className="login-modal-outer">
      <div className="login-modal-inner" onClick={e => e.stopPropagation()}>
        <h1>You Must Be Logged in to Use This Service.</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>}
    </>,
    document.getElementById("login-modal")
  );
};

export default Login;
