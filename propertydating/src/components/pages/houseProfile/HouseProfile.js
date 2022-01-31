import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPropertyById } from "../../../utils/api";
import { currencyFormatter } from "../../../utils/currencyFormatter";

//TODO Remove this static placeholder house pic for <img> tag for dynamic image.
// Would we need it for situations where images are not uploaded yet?
import placeHolderPic from "./housePlaceholderPic.jpg";

export default function HouseProfile() {
  const { house_id } = useParams();

  const [property, setProperty] = useState({});
  const { price, postcode, house_images, offer_made, property_type, beds } =
    property;

  const [imageIndex, setImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchPropertyById(house_id)
      .then(res => {
        setProperty(res);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      });
  }, [house_id, imageIndex]);

  return (
    <div className="container">
      <h1 className="text-center">House Profile</h1>
      <div className="bg-gray-200 rounded shadow-md ">
        <img
          className="w-full rounded-b-none rounded-t-md "
          src={house_images ? house_images[imageIndex] : null}
          alt="house profile"
        ></img>

        <div className="p-2">
          <ul>
            <li>Price: {currencyFormatter.format(price)}</li>
            <li>Postcode: {postcode}</li>
            <li>Property Type: {property_type}</li>
            <li>Bedrooms: {beds}</li>
            <li>Offer made on property? {offer_made ? "Yes." : "No."}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
