import React from "react";
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable'; // <DraggableCore>

const MainHouseImage = ({image}) => {



    return(
    
        <img src={image.key}></img>
     
    )
}

export default MainHouseImage;