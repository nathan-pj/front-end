import { useState } from "react";
export default function AddProperty() {
  const [postCodeInput, setPostCodeInput] = useState("");
  return (
    <div className="bg-red-300">
      <h1>Add Property</h1>
      <form action="">
        <label htmlFor="property-type">Select Property Type:</label>
        <select name="property-type" id="">
          <option value="house" selected>
            House
          </option>
          <option value="flat" selected>
            Flat
          </option>
          <option value="studio" selected>
            Studio
          </option>
          <option value="bungalow" selected>
            Bungalow
          </option>
        </select>
        <br />
        <label htmlFor="">Postcode</label>
        <input
          class="input"
          type="text"
          value={postCodeInput}
          onChange={event => {
            setPostCodeInput(event.target.value);
          }}
        />
        <br />
        <label htmlFor="">Price</label>
        <input
          class="input"
          type="text"
          value={postCodeInput}
          onChange={event => {
            setPostCodeInput(event.target.value);
          }}
        />
        <br />
        <label htmlFor="">Beds</label>
        <input
          class="input"
          type="text"
          value={postCodeInput}
          onChange={event => {
            setPostCodeInput(event.target.value);
          }}
        />
        <br />
        <label htmlFor="">Upload Image:</label>
        <input type="file" id="image" accept="*jpg" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
