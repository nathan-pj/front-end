import React, { useContext } from "react";
import Context from '../../../contexts/Context';
import tick from '../../../images/tick.png'
import cross from '../../../images/cross.png'
import ImageArrowLeft from "./ImageArrowLeft";
import ImageArrowRight from "./ImageArrowRight";

const MainHouseImage = ({
  image,
  house,
  setCurrentImage,
  numOfImages,
  setNumOfImages,
  currentImage,
}) => {

    const {  showTick,
        setShowTick,
        showCross,
        setShowCross } = useContext(Context);

  return (
    <div className="house-card-meta">
      <div className="house-card-meta__image">

        <div className="house-card-meta__image__container"> 
        <img src={image.key} alt="house" />
        {showTick && <img className="house-card-meta__image__container__tick" src={tick} alt="house" />}
        {showCross && <img className="house-card-meta__image__container__cross" src={cross} alt="house" />}
        </div>

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
      </div>
      <div className="house-card-meta__details">
        <p>{`Price: £${house.price}`}</p>
        <p>{`Type: ${house.type} `}</p>
        <p>{`Postcode: ${house.postcode}`}</p>
      </div>
    </div>
  );
};

export default MainHouseImage;
