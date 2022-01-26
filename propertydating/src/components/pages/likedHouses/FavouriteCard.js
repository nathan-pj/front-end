import ChatIcon from "./ChatIcon";
import BinIcon from "./BinIcon";
import { useNavigate } from "react-router-dom";

export default function FavouriteCard({ house, index }) {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/house-profile/${house.house_id}`);
  };

  return (
    <div className="favourite-card" onClick={handleClick}>
      <div className="favourite-card__image">
        <img src={house.house_images[0]} alt="house pic"></img>
        <div className="favourite-card__image__chat-icon">
          <ChatIcon />
        </div>
        <div className="favourite-card__image__bin-icon">
          <BinIcon index={index} house={house} />
        </div>
      </div>
      <div className="favourite_card__meta">
        <h2>Postcode: {`${house.postcode} (with address)`}</h2>
        <ul>
          <li>Price: £{house.price}</li>
          <li>Type: {house.property_type}</li>
        </ul>
      </div>
    </div>
  );
}
