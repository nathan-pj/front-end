import React, { useState, createContext, useEffect } from "react";
import { postNewUser, getUser } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

const Context = createContext();
export function ConstProvider({ children }) {
  const [likedHouses, setLikedHouses] = useState([]);
  const [testHouses, setTestHouses] = useState([]);
  const [listOfLikedHouses, setListOfLikedHouses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
  const [showTick, setShowTick] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    user &&
      getUser(user.sub)
        .then((user) => {
          if (!user) {
            return postNewUser(
              user.sub,
              user.name,
              user.nickname,
              user.given_name,
              user.family_name,
              user.email,
              user.picture
            );
          }
          return user;
        })
        .then((user) => {
          setLikedHouses(user.liked_houses);
          setLoggedInUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
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
        listOfLikedHouses,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
