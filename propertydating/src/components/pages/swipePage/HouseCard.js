import React, { useState } from "react";
import ImageArrowLeft from "./ImageArrowLeft";
import ImageArrowRight from "./ImageArrowRight";
import MainHouseImage from "./MainHouseImage";

export default function HouseCard({
  house,
  currentImage,
  setCurrentImage,
  numOfImages,
  setNumOfImages
}) {
  
  return (
    <div className="house-card">
      <div className="image-buttons">
        <ImageArrowLeft
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
        />
        <ImageArrowRight
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
          numOfImages={numOfImages}
        />
      </div>
      <MainHouseImage image={house.house_images[currentImage]} />
      <p>{house.price}</p>
    </div>
  );
}
