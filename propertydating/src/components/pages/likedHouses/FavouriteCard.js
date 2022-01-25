import ChatIcon from "./ChatIcon";
import BinIcon from "./BinIcon";
import { Link } from "react-router-dom";
export default function FavouriteCard({ house, index }) {
  console.log(house);
  return (
    <div className="favourite-card">
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
        <h2>{`${house.postcode} (with address)`}</h2>
        <ul>
          <li>{house.price}</li>
          <li>{house.type}</li>
        </ul>
      </div>
    </div>
  );
}
