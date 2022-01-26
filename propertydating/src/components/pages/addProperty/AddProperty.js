import { useState } from "react";
import photoStorage from "../../../firebase/index";
console.log(photoStorage);
export default function AddProperty() {
  const [postCodeInput, setPostCodeInput] = useState("");
  const [image, setImage] = useState("");
  console.log(image);

  const handleUpload = (event) => {
    event.preventDefault();
    const uploadTask = photoStorage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        photoStorage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };
  return (
    <div className="bg-red-300">
      <h1>Add Property</h1>
      <form action="">
        <label htmlFor="property-type">Select Property Type:</label>
        <select name="property-type" id="">
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="studio">Studio</option>
          <option value="bungalow">Bungalow</option>
        </select>
        <br />
        <label htmlFor="">Postcode</label>
        <input
          className="input"
          type="text"
          value={postCodeInput}
          onChange={(event) => {
            setPostCodeInput(event.target.value);
          }}
        />
        <br />
        <label htmlFor="">Price</label>
        <input
          className="input"
          type="text"
          value={postCodeInput}
          onChange={(event) => {
            setPostCodeInput(event.target.value);
          }}
        />
        <br />
        <label htmlFor="">Beds</label>
        <input
          className="input"
          type="text"
          value={postCodeInput}
          onChange={(event) => {
            setPostCodeInput(event.target.value);
          }}
        />
        <br />
        <label htmlFor="">Upload Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button onClick={handleUpload}>Upload</button>
        <br />
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}
