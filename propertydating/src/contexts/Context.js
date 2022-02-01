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
  console.log(likedHouses);
  useEffect(() => {
    if (user !== undefined) {
      postNewUser(
        user.sub,
        user.name,
        user.nickname,
        user.given_name,
        user.family_name,
        user.email,
        user.picture
      )
        .then((res) => {
          setLoggedInUser(res);
        })
        .catch((err) => {
          getUser(user.sub).then((res) => {
            setLoggedInUser(res);
            setLikedHouses([...new Set(res.liked_houses)]);
          });
        });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (likedHouses.length > 0) {
      setListOfLikedHouses((currValue) => {
        const newArray = testHouses.filter((house) => {
          return likedHouses.includes(house.house_id);
        });
        return newArray;
      });
    }
  }, [likedHouses]);

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
