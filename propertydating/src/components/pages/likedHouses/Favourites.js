import { useContext } from "react";
import FavouriteCard from "./FavouriteCard";
import Context from "../../../contexts/Context";

export default function LikedHouses() {
  const { likedHouses } = useContext(Context);

  return (
    <div className="favourites-main">
      {likedHouses.length > 0
        ? likedHouses.map((house, index) => {
            return (
              <FavouriteCard
                key={`house-${index}`}
                index={index}
                house={house}
              />
            );
          })
        : null}
    </div>
  );
}
