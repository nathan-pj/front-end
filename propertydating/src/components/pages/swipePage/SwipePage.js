import Context from "../../../contexts/Context";
import HouseArrows from "./HouseArrows";
import React, { useContext, useEffect, useState } from "react";
import HouseCard from "./HouseCard";

export default function HomePage() {
  const { testHouses, setTestHouses, likedHouses, setLikedHouses } =
    useContext(Context);
  const [houseIndex, setHouseIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [numOfImages, setNumOfImages] = useState(
    testHouses[0].house_images.length - 1
  );

  useEffect(() => {
    setNumOfImages(testHouses[houseIndex].house_images.length - 1);
  }, [houseIndex, testHouses]);

  useEffect(() => {
    console.log(likedHouses);
  }, [likedHouses]);
  return (
    <div className="swipe-page">
      <HouseCard
        house={testHouses[houseIndex]}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        numOfImages={numOfImages}
        setNumOfImages={setNumOfImages}
        setHouseIndex={setHouseIndex}
      />
      <HouseArrows
        house={testHouses[houseIndex]}
        setHouseIndex={setHouseIndex}
        setCurrentImage={setCurrentImage}
        setLikedHouses={setLikedHouses}
        likedHouses={likedHouses}
        houseIndex={houseIndex}
      />
    </div>
  );
}
