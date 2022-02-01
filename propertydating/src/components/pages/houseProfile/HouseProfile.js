import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPropertyById } from "../../../utils/api";
import { currencyFormatter } from "../../../utils/currencyFormatter";

//TODO Remove this static placeholder house pic for <img> tag for dynamic image
import placeHolderPic from "./housepic.jpg";

export default function HouseProfile() {
  const { house_id } = useParams();

  console.log(house_id);
  const [property, setProperty] = useState({});

  useEffect(() => {
    fetchPropertyById(house_id).then(res => {
      setProperty(res);
    });
  }, [house_id]);

  return (
    <div className="container">
      <h1 className="text-center">House Profile</h1>
      <div className="bg-gray-200 rounded shadow-md ">
        <img
          className="w-full rounded-b-none rounded-t-md "
          src={property.house_images ? property.house_images[0] : null}
          alt="house profile"
        ></img>

        <div className="p-2">
          <ul>
            <li>Price: {currencyFormatter.format(property.price)}</li>
            <li>Postcode: {property.postcode}</li>
            <li>Property Type: {property.property_type}</li>
            <li>Bedrooms: {property.beds}</li>
            <li>
              Offer made on property? {property.offer_made ? "YES" : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
