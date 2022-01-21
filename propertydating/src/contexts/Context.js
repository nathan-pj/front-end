import React, { useState, createContext } from "react";
const dummyHouse = [
  {
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
        bucket: "images",
      },
      {
        key: "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519",
        bucket: "images",
      },
    ],
  },
  {
    type: "detatched",
    price: 300000,
    postcode: "121221",
    house_images: [
      {
        key: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bucket: "images",
      },
      {
        key: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
        bucket: "images",
      },
      {
        key: "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519",
        bucket: "images",
      },
    ],
  },
];
const Context = createContext();
export function ConstProvider({ children }) {
  const [likedHouses, setLikedHouses] = useState([]);
  const [testHouses, setTestHouses] = useState(dummyHouse);

  return (
    <Context.Provider
      value={{ testHouses, setTestHouses, likedHouses, setLikedHouses }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
