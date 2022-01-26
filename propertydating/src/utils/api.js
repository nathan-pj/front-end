import axios from "axios";

const propertyHookUpAPI = axios.create({
  baseURL: `https://property-backend-api.herokuapp.com/api`,
});

export const fetchProperties = () => {
  return propertyHookUpAPI.get(`/properties`).then((res) => {
    return res.data.properties;
  });
};

export const addNewProperty = (
  user_id,
  property_type,
  price,
  postcode,
  beds,
  house_images
) => {
  return propertyHookUpAPI
    .post(`/properties`, {
      user_id: `${user_id}`,
      property_type: `${property_type}`,
      price: `${price}`,
      postcode: `${postcode}`,
      beds: `${beds}`,
      house_images: `${house_images}`,
    })
    .then((res) => {
      return res.data.property;
    });
};
