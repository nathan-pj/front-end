import React, { useState, createContext } from "react";

const Context = createContext();
export function ConstProvider({ children }) {
  const [likedHouses, setLikedHouses] = useState([]);
  const [testHouses, setTestHouses] = useState(dummyHouse);
  const [loggedInUser, setLoggedInUser] = useState(user);
  const [showTick, setShowTick] = useState(false);
  const [showCross, setShowCross] = useState(false);

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

const dummyHouse = [
  {
    house_id: 1,
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "http://cdn.home-designing.com/wp-content/uploads/2019/02/courtyard-design-2.jpg",
        bucket: "images",
      },
      {
        key: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc080120aman-meeks-005-1591800041.jpg",
        bucket: "images",
      },
    ],
  },
  {
    house_id: 2,
    type: "detatched",
    price: 1111111,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519",
        bucket: "images",
      },
      {
        key: "https://stylebyemilyhenderson.com/wp-content/uploads/2019/08/Emily-Henderson-Moutain-House-Living-Room-LoRes1.jpg",
        bucket: "images",
      },
      {
        key: "https://assets.sohohome.com/images/fullscreen/511-copyright-sohohouseistanbul-apartment-18.jpg",
        bucket: "images",
      },
      {
        key: "http://cdn.home-designing.com/wp-content/uploads/2013/11/2-Stepping-stones.jpg",
        bucket: "images",
      },
    ],
  },
  {
    house_id: 50,
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "http://cdn.home-designing.com/wp-content/uploads/2019/02/courtyard-design-2.jpg",
        bucket: "images",
      },
      {
        key: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc080120aman-meeks-005-1591800041.jpg",
        bucket: "images",
      },
    ],
  },
  {
    house_id: 5,
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "http://cdn.home-designing.com/wp-content/uploads/2019/02/courtyard-design-2.jpg",
        bucket: "images",
      },
      {
        key: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc080120aman-meeks-005-1591800041.jpg",
        bucket: "images",
      },
    ],
  },
  {
    house_id: 52,
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "http://cdn.home-designing.com/wp-content/uploads/2019/02/courtyard-design-2.jpg",
        bucket: "images",
      },
      {
        key: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc080120aman-meeks-005-1591800041.jpg",
        bucket: "images",
      },
    ],
  },
  {
    house_id: 533,
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "http://cdn.home-designing.com/wp-content/uploads/2019/02/courtyard-design-2.jpg",
        bucket: "images",
      },
      {
        key: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc080120aman-meeks-005-1591800041.jpg",
        bucket: "images",
      },
    ],
  },
  {
    house_id: 30,
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "http://cdn.home-designing.com/wp-content/uploads/2019/02/courtyard-design-2.jpg",
        bucket: "images",
      },
      {
        key: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc080120aman-meeks-005-1591800041.jpg",
        bucket: "images",
      },
    ],
  },
];

export default Context;
