import axios from "axios";

const propertyHookUpAPI = axios.create({
  baseURL: `https://property-backend-api.herokuapp.com/api` 
});

export const fetchProperties = () => {
  return propertyHookUpAPI.get(`/properties`).then(res => {
    return res.data.properties;
  });
};

export const fetchPropertyById = house_id => {
  return propertyHookUpAPI.get(`/properties/${house_id}`).then(res => {
    return res.data;
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
      house_images: house_images
    })
    .then(res => {
      return res.data.property;
    });
};

export const postNewUser = (
  user_id,
  username,
  password,
  first_name,
  last_name,
  email,
  profile_pic
) => {
  
  return propertyHookUpAPI
    .post(`/users`, {
      user_id: user_id,
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email,
      profile_pic: profile_pic
    })
    .then(res => {
      return res.data.user;
    });
};

export const getUser = (user_id) => {
  console.log(user_id)
  return propertyHookUpAPI.get(`/users/${user_id}`).then(res => {
    return res.data.user;
  });
};

export const patchLikedHouses = (user_id, house) => {
  return propertyHookUpAPI
    .patch(`/users/${user_id}/likedhouses`, { house })
    .then(res => {
      return res.data.user;
    });
};
