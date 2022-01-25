import ChatIcon from "./ChatIcon";
import BinIcon from "./BinIcon";
import { Link, useNavigate } from "react-router-dom";

export default function FavouriteCard({ house, index }) {
  
  let navigate = useNavigate();
  
  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/house-profile`);
  }

  return (  
    <div className="favourite-card" onClick={handleClick}>
      <div className="favourite-card__image">
        <img src={house.house_images[0].key} alt="house pic"></img>
        <div className="favourite-card__image__chat-icon">
          <Link to="/chat">
            <ChatIcon />
          </Link>
        </div>
        <div className="favourite-card__image__bin-icon">
          <BinIcon index={index} house={house} />
        </div>
      </div>
      <div className="favourite_card__meta">
        <h2>Postcode: {`${house.postcode} (with address)`}</h2>
        <ul>
          <li>Price: £{house.price}</li>
          <li>Type: {house.type}</li>
        </ul>
      </div>
    </div>
   
  );
}
