import { useContext } from "react";
import FavouriteCard from "./FavouriteCard";
import Context from "../../../contexts/Context";

export default function LikedHouses() {
  const { likedHouses, listOfLikedHouses } = useContext(Context);
  return (
    <>
      <h1>Liked Houses</h1>
      {likedHouses.length > 0 ? (
        <div className="favourites-main">
          {listOfLikedHouses.map((house, index) => {
            return (
              <FavouriteCard
                key={`house-${index}`}
                index={index}
                house={house}
              />
            );
          })}
        </div>
      ) : (
        <p>You don't have any liked houses.</p>
      )}
    </>
  );
}
