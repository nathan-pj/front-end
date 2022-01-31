import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserProfile() {
  const { user } = useAuth0();

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

  return (
    <div className="userProfile">
      <h1>{user.name}'s Profile</h1>
      <div className="userProfile__image">
        <img src={user.picture} alt={user.name} />
        <button>Message User</button>  {!editProfile? <button onClick={() => setEditProfile(true)}>Edit User Information</button>: <button onClick={() => setEditProfile(false)}>Hide User Information</button>}
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
    </div>
  );
}
