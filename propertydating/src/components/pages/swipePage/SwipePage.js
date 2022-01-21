import Context from "../../../contexts/Context";
import HouseArrows from "./HouseArrows";
import { useContext, useState } from "react";
import HouseCard from "./HouseCard";
export default function HomePage() {
  const { testHouses, setTestHouses, likedHouses, setLikedHouses } =
    useContext(Context);
  const [houseIndex, setHouseIndex] = useState([0]);
  console.log(testHouses);
  return (
    <div className="swipe-page">
      <HouseCard house={testHouses[houseIndex]} />;
      <HouseArrows setHouseIndex={setHouseIndex} />
    </div>
  );
}
