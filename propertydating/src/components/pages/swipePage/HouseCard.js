import { useState } from "react";
import ImageArrowLeft from "./ImageArrowLeft";
import ImageArrowRight from "./ImageArrowRight";
import MainHouseImage from "./MainHouseImage";


export default function HouseCard({
  house,
  currentImage,
  setCurrentImage,
  numOfImages,
  setNumOfImages,
  setHouseIndex
}) {

  const [isDragged, setIsDragged] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
  }


 const  onDragStart = (e) => {
    e.dataTransfer.setData('id', 'setTheId');
  /*   console.log('onDragStart'); */
    setIsDragged(true);
}

const onDragEnd = (e) => {
  e.preventDefault();

  if(e.screenX > window.innerWidth / 2){
    console.log("right = swipe")
    setHouseIndex((currentState) => currentState + 1);
  } else{
    console.log("left = skip")
    setHouseIndex((currentState) => currentState + 1)
  }

  setIsDragged(false);
}
  
  return (
    <div className={`house-card ${isDragged && 'opacity04'}`} draggable="true" onDragOver={onDragOver} onDragStart={onDragStart} onDragEnd={onDragEnd}>
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
