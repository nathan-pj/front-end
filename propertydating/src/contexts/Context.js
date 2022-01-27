import React, { useState, createContext, useEffect } from "react";
import { postNewUser, getUser } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

const Context = createContext();
export function ConstProvider({ children }) {
  const [likedHouses, setLikedHouses] = useState([]);
  const [testHouses, setTestHouses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
  const [showTick, setShowTick] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  console.log(user);

  useEffect(() => {
    postNewuser;
  }, [isAuthenticated]);
  return (
    <Context.Provider
      value={{
        testHouses,
        setTestHouses,
        likedHouses,
        setLikedHouses,
        loggedInUser,
        setLoggedInUser,
        showTick,
        setShowTick,
        showCross,
        setShowCross,
        showLoginModal,
        setShowLoginModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
