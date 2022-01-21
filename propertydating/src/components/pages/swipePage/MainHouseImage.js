import React from "react";

const MainHouseImage = ({image}) => {
console.log(image)
   
    return(
        <img src={image.key}></img>
    )
}

export default MainHouseImage;