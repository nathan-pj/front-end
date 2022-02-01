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
  const [initialRender, setInitialRender] = useState(true);
  const [amountOfProperties, setAmountOfProperties] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (amountOfProperties > 0) {
      setNumOfImages(filteredProperty[houseIndex].house_images.length - 1);
    }
  }, [houseIndex, filteredProperty]);

  useEffect(() => {
    setIsLoading(true);
    fetchProperties().then((res) => {
      setTestHouses(res);
      setAmountOfProperties(res.length);
      setFilteredPropery((currValue) => {
        const filtered = res.filter((house) => {
          return !likedHouses.includes(house.house_id);
        });
        setAmountOfProperties(filtered.length);
        return filtered;
      });
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="swipe-page">
      {isLoading ? (
        <p>Loading</p>
      ) : filteredProperty.length > 0 ? (
        <>
          {initialRender && (
            <p>
              Swipe right for properties you <span className="like">like</span>,
              and <span className="skip">left</span> for those you wish to skip
            </p>
          )}
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
            setInitialRender={setInitialRender}
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
