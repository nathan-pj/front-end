import { useContext, useState } from "react";
import Context from "../../../contexts/Context";
import { deleteLikedProperty } from "../../../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

export default function BinIcon({ index, house }) {
  const { user } = useAuth0();
  const { setLikedHouses, likedHouses } = useContext(Context);
  const [isError, setIsError] = useState(false);

  function handleClick(e) {
    setIsError(false);
    e.stopPropagation();
    const removeHouse = likedHouses.filter((house, i) => {
      if (index !== i) {
        return house;
      }
    });
    setLikedHouses(removeHouse);
    deleteLikedProperty(user.sub, house.house_id).catch((err) => {
      setIsError(true);
      console.log(err);
      setLikedHouses((currValue) => {
        const newArray = [...currValue, house.house_id];
        return newArray;
      });
    });
  }
  return (
    <>
      {isError ? <p>Sorry property could not be deleted, try again</p> : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={(e) => handleClick(e)}
      >
        <path
          fillRule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}
