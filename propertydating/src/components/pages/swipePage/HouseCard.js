import { useState, useContext } from "react";
import Context from '../../../contexts/Context';

import MainHouseImage from "./MainHouseImage";

export default function HouseCard({
  house,
  currentImage,
  setCurrentImage,
  numOfImages,
  setNumOfImages,
  setHouseIndex,
}) {

  const {  setShowTick,
    setShowCross } = useContext(Context);

  const [isDragged, setIsDragged] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    if (e.screenX > window.innerWidth / 2) {
      console.log("test")
      setShowTick(true)
      setShowCross(false)
    } else {
      setShowCross(true)
      setShowTick(false)
    }
  };

  const onDragStart = (e) => {
   
    setIsDragged(true);
  };

  const onDragEnd = (e) => {
    e.preventDefault();
    setCurrentImage(0)
    if (e.screenX > window.innerWidth / 2) {
      console.log("right = swipe");
      setHouseIndex((currentState) => currentState + 1);
    } else {
      console.log("left = skip");
      setHouseIndex((currentState) => currentState + 1);
    }
    setShowCross(false)
    setShowTick(false)
    setIsDragged(false);
  };

  const onTouchStart = (e) => {
    e.stopPropagation();
    setCurrentImage(0);
    setIsDragged(true);
  }; 

  const onTouchMove = (e) => {
    e.stopPropagation();
    if (e.changedTouches[0].pageX > window.innerWidth / 2) {
      setShowTick(true)
      setShowCross(false)
    } else {
      setShowCross(true)
      setShowTick(false)
    }
  }
  const onTouchEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage(0)
    if (e.changedTouches[0].pageX > window.innerWidth / 2) {
      setHouseIndex((currentState) => currentState + 1);
    } else {
      setHouseIndex((currentState) => currentState + 1);
    }
    setShowCross(false)
    setShowTick(false)
    setIsDragged(false);
  };

  return (
    <div
      className={`house-card ${isDragged && "opacity04"}`}
      draggable="true"
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onTouchStart={onTouchStart} 
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove} 
    >
      <MainHouseImage
        image={house.house_images[currentImage]}
        house={house}
        setCurrentImage={setCurrentImage}
        numOfImages={numOfImages}
        setNumOfImages={setNumOfImages}
        currentImage={currentImage}
      />
    </div>
  );
}
