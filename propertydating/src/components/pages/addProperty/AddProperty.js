import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../../firebase";

export default function AddProperty() {
  const [postCodeInput, setPostCodeInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [bedsInput, setBedsInput] = useState("");

  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = event => {
    event.preventDefault();
    const storageRef = ref(storage, `/images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      err => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => console.log(url));
      }
    );
  };

  return (
    <div>
      <h1 className="text-center">Add Property</h1>
      <form action="">
        <label htmlFor="property-type">Select Property Type:</label>
        <select
          className="m-1 border-2 border-gray-300 rounded"
          name="property-type"
          id=""
        >
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="studio">Studio</option>
          <option value="bungalow">Bungalow</option>
        </select>
        <div className="">
          <label htmlFor="">Postcode</label>
          <input
            className="m-1 border-2 border-gray-300 rounded"
            type="text"
            value={postCodeInput}
            onChange={event => {
              setPostCodeInput(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            className="m-1 border-2 border-gray-300 rounded"
            type="text"
            value={priceInput}
            onChange={event => {
              setPriceInput(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Beds</label>
          <input
            className="m-1 border-2 border-gray-300 rounded"
            type="text"
            value={bedsInput}
            onChange={event => {
              setBedsInput(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Upload Image:</label>
          <input
            className="p-1 m-0 ml-0 border-2 border-gray-300 rounded"
            type="file"
            id="image"
            onChange={e => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button
          className="p-1 m-1 ml-0 text-green-100 bg-green-500 rounded"
          onClick={handleUpload}
        >
          Upload
        </button>
        <p>Uploaded {progress} %</p>
        <button>Submit</button>
      </form>
    </div>
  );
}
