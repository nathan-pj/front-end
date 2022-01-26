import React, { useState, createContext, useEffect } from "react";

const Context = createContext();
export function ConstProvider({ children }) {
  const [likedHouses, setLikedHouses] = useState([]);
  const [testHouses, setTestHouses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(user);
  const [showTick, setShowTick] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [loggedOutUser, setLoggedOutUser] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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
        loggedOutUser,
        setLoggedOutUser,
        showLoginModal,
        setShowLoginModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}

const user = {
  username: "River.Kutch",
  user_id: 0,
  password: "molli",
  firstname: "Vickie",
  secondname: "Fisher",
  email: "Rebeka.Rowe@hotmail.com",
  profilepic:
    "https://pbs.twimg.com/profile_images/1176237957851881472/CHOXLj9b_400x400.jpg",
};

export default Context;
