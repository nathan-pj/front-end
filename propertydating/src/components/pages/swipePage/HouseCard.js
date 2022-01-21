import { useState } from "react";
import ImageArrowLeft from "./ImageArrowLeft";
import ImageArrowRight from "./ImageArrowRight";

export default function HouseCard({ house }) {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="house-card">
      <div className="image-buttons">
        <ImageArrowLeft setCurrentImage={setCurrentImage} />
        <ImageArrowRight setCurrentImage={setCurrentImage} />
      </div>
      <img src={house.house_images[currentImage].key} alt="house-pic"></img>
    </div>
  );
}
