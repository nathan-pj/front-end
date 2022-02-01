import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { removeGoogleFromId } from "../../../utils/removeGoogleFromId";
import { useParams } from "react-router-dom";
import { getUser} from '../../../utils/api';

export default function UserProfile() {

  const { user } = useAuth0();
  let navigate = useNavigate();
  const { user_id } = useParams();
  const [whosProfile, setWhoesProfile] = useState([])
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [editProfile, setEditProfile] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!firstName && !lastName && !email){
      return 
    }
    if (email) {
      const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
      if (!emailRegEx.test(email)) {
        return alert("Invalid email address");
      }
    }

    const profileObject = {
      first_name: firstName,
      last_name: lastName,
      email: email
    };

    console.log(profileObject);
    console.log("Fetch request goes here");

    setFirstName("");
    setLastName("");
    setEmail("");
    setEditProfile(false);
  };


  const messageUser = (e) => {
      e.stopPropagation();
      navigate(`/chat/${removeGoogleFromId(user.sub)}-${removeGoogleFromId(user_id)}`); // 1st = Logged in user |  2nd seller id
  }

  useEffect(() => {

    getUser(user_id).then((user) => {
      console.log(user)
      setWhoesProfile(user);
    }).catch(err => console.log(err))

  }, [user_id])

  return (
    <div className="userProfile">
    {whosProfile && <>
      <h1>{whosProfile.first_name}'s Profile</h1>
      <div className="userProfile__image">
        <img src={whosProfile.profile_pic} alt={`photo-of-${whosProfile.first_name}`} />
        <button onClick={messageUser}>Message User</button>  {whosProfile.user_id === user.sub ? !editProfile? <button onClick={() => setEditProfile(true)}>Edit User Information</button>: <button onClick={() => setEditProfile(false)}>Hide User Information</button> : null}
      </div>
      {editProfile && <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
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
        />
        <button type="submit">Save Changes</button>
      </form>}
      </>}
    </div>
  );
}
