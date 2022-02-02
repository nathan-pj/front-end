import React, { useState, useContext } from "react";
import Context from "../../../contexts/Context";
import { updateSettings } from "../../../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

export default function Settings() {
  const [postcode, setPostcode] = useState("");
  const [radius, setRadius] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [houseType, setHouseType] = useState("");
  const { setLoggedInUser } = useContext(Context);
  const { user } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateSettings(user.sub, minPrice, maxPrice)
      .then((res) => {
        console.log(res);
        setLoggedInUser(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setPostcode("");
    setRadius("");
    setMinPrice("");
    setMaxPrice("");
    setHouseType("");
  };

  return (
    <div className="userProfile">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
         <label htmlFor="emailAddress">Email Address</label>
        <input
          placeholder="Email"
          name="emailAddress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <label htmlFor="postcode">Postcode</label>
        <input
          type="text"
          name="postcode"
          placeholder="Postcode for search"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <label htmlFor="radius">Radius</label>
        <select
          name="radius"
          placeholder="Radius"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        >
          <option value={""}>Please select</option>
          <option value={0.25}>Within quarter a mile</option>
          <option value={0.5}>Within half a mile</option>
          <option value={1}>Within 1 mile</option>
          <option value={3}>Within 3 miles</option>
          <option value={5}>Within 5 miles</option>
          <option value={10}>Within 10 miles</option>
          <option value={15}>Within 15 miles</option>
        </select>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          name="maxPrice"
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <label htmlFor="houseType">House Type:</label>
        <select
          placeholder="House Type"
          value={houseType}
          onChange={(e) => setHouseType(e.target.value)}
        >
          <option value={""}>Please select</option>
          <option value={"house"}>house</option>
          <option value={"semi-detached"}>Semi-detached</option>
          <option value={"terraced"}>Terraced</option>
          <option value={"flat"}>Flat</option>
          <option value={"bungalow"}>Bungalow</option>
        </select>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
