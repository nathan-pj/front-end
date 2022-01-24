import React from "react";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable"; // <DraggableCore>

const MainHouseImage = ({ image, house }) => {
  return (
    <div className="house-card-meta">
      <img src={image.key} alt="house" />
      <div className="house-card-meta__details">
        <h1>{`Price: £${house.price}`}</h1>
        <h2>{`Type: ${house.type} `}</h2>
        <h2>{`Postcode: ${house.postcode}`}</h2>
      </div>
    </div>
  );
};

export default MainHouseImage;
