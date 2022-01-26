import { useState, useContext } from "react";
import Context from "../../../contexts/Context";

import MainHouseImage from "./MainHouseImage";

export default function HouseCard({
  house,
  currentImage,
  setCurrentImage,
  numOfImages,
  setNumOfImages,
  setHouseIndex,
  setAmountOfProperties,
}) {
  return (
    <div className={`house-card`}>
      <MainHouseImage
        image={house.house_images[currentImage]}
        house={house}
        setCurrentImage={setCurrentImage}
        numOfImages={numOfImages}
        setNumOfImages={setNumOfImages}
        currentImage={currentImage}
        setHouseIndex={setHouseIndex}
        setAmountOfProperties={setAmountOfProperties}
      />
    </div>
  );
}
