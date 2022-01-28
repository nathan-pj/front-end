import Context from "../../../contexts/Context";
import HouseArrows from "./HouseArrows";
import React, { useContext, useEffect, useState } from "react";
import HouseCard from "./HouseCard";
import { fetchProperties } from "../../../utils/api";

export default function HomePage() {
  const { testHouses, setTestHouses, likedHouses, setLikedHouses } =
    useContext(Context);
  const [filteredProperty, setFilteredPropery] = useState([]);
  const [houseIndex, setHouseIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [numOfImages, setNumOfImages] = useState();
  const [amountOfProperties, setAmountOfProperties] = useState(
    testHouses.length
  );

  useEffect(() => {
    if (amountOfProperties > 0) {
      setNumOfImages(testHouses[houseIndex].house_images.length - 1);
    }
  }, [houseIndex, testHouses, filteredProperty]);

  useEffect(() => {
    fetchProperties().then((res) => {
      setTestHouses(res);
      setAmountOfProperties(res.length);
      setFilteredPropery((currValue) => {
        const filtered = testHouses.filter((house) => {
          return !likedHouses.includes(house.house_id);
        });
        return filtered;
      });
    });
  }, [testHouses]);

  return (
    <div className="swipe-page">
      {filteredProperty.length > 0 ? (
        <>
          <HouseCard
            house={filteredProperty[houseIndex]}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            numOfImages={numOfImages}
            setNumOfImages={setNumOfImages}
            setHouseIndex={setHouseIndex}
            setAmountOfProperties={setAmountOfProperties}
          />
          <HouseArrows
            house={filteredProperty[houseIndex]}
            setHouseIndex={setHouseIndex}
            setCurrentImage={setCurrentImage}
            setLikedHouses={setLikedHouses}
            likedHouses={likedHouses}
            houseIndex={houseIndex}
            setAmountOfProperties={setAmountOfProperties}
          />
        </>
      ) : (
        <p>
          No more properties match your criteria, try increasing your radius in
          settings
        </p>
      )}
    </div>
  );
}
