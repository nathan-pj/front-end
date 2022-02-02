import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState, useContext } from "react";
import { storage } from "../../../firebase";
import Context from "../../../contexts/Context";
import { addNewProperty } from "../../../utils/api";

export default function AddProperty() {
  const [postCodeInput, setPostCodeInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [bedsInput, setBedsInput] = useState("");
  const [propertyType, setPropertyType] = useState("house");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [houseImageArray, setHouseImageArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { loggedInUser } = useContext(Context);

  const handleUpload = (event) => {
    setIsError(false);
    event.preventDefault();
    const storageRef = ref(storage, `/images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => {
        console.log(err);
        setIsError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setHouseImageArray((currArray) => {
            const newArray = [...currArray, url];
            return newArray;
          });
        });
      }
    );
  };

  const handleSubmit = (event) => {
    setIsError(false);
    event.preventDefault();
    setUploaded(false);
    setIsLoading(true);
    addNewProperty(
      loggedInUser.user_id,
      propertyType,
      Number(priceInput),
      postCodeInput,
      Number(bedsInput),
      houseImageArray
    )
      .then((res) => {
        setUploaded(true);
        setIsLoading(false);
        setPriceInput("");
        setBedsInput("");
        setPropertyType("house");
        setHouseImageArray([]);
        setPostCodeInput("");
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  };
  return (
    <div className="propertyUpload">
      <h1>Add Property</h1>
      <div className="newHouseBoxes">
      <div className="mainImg">
          {houseImageArray[0] === null ? null : (
              <img
                className="mainImage"
                src={houseImageArray[0]}
                 alt="Add an Image 1"
              ></img>
          )}
        </div>
       

       <div className="firstBox">
       {houseImageArray[2] === null ? null : (
       <img
         src={houseImageArray[1]}
         alt="Add an Image 2"
       ></img>
       )}
</div>
          <div className="secondBox">
            {houseImageArray[2] === null ? null : (
              <img src={houseImageArray[2]} alt="Add an Image 3"></img>
            )}
          </div>
          <div className="thirdBox">
            {houseImageArray[3] === null ? null : (
              <img src={houseImageArray[3]} alt="Add an Image 4" ></img>
            )}
          </div>
          <div className="fourthBox">
            {houseImageArray[4] === null ? null : (
              <img src={houseImageArray[4]} alt="Add an Image 5" ></img>
            )}
          </div>
       
      </div>
      <form className="center" action="">
        <label htmlFor="property-type">Select Property Type:</label>
        <select
          className="m-1 border-2 border-gray-300 rounded"
          name="property-type"
          id=""
          onChange={(event) => {
            setPropertyType(event.target.value);
          }}
        >
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="studio">Studio</option>
          <option value="bungalow">Bungalow</option>
        </select>
      
          <label htmlFor="">Postcode :</label>
          <input
            className="m-1 border-2 border-gray-300 rounded"
            type="text"
            value={postCodeInput}
            onChange={(event) => {
              setPostCodeInput(event.target.value);
            }}
          />
     
          <label htmlFor="">Price :</label>
          <input
            className="m-1 border-2 border-gray-300 rounded"
            type="text"
            value={priceInput}
            onChange={(event) => {
              setPriceInput(event.target.value);
            }}
          />
      
          <label htmlFor="">Beds :</label>
          <input
            className="m-1 border-2 border-gray-300 rounded"
            type="text"
            value={bedsInput}
            onChange={(event) => {
              setBedsInput(event.target.value);
            }}
          />
      
          <label htmlFor="">Upload Image:</label>
       
          <input
            className="upload"
            type="file"
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
      
        <button
          className="p-1 m-1 ml-0 text-green-100 bg-green-500 rounded hover:bg-green-800"
          onClick={handleUpload}
        >
          Upload
        </button>
        <p>Uploaded {progress} %</p>
      </form>
      <div className="submit-button">
      {isLoading ? (
        <p>Uploading your property</p>
      ) : (
        <button
          className="p-1 m-1 ml-0 text-green-100 bg-purple-500 rounded hover:bg-purple-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
      </div>
      {isError ? <p>Sorry, something went wrong, try again</p> : null}
      {uploaded ? <p>Your property has been uploaded successfully</p> : null}
    </div>
  );
}
