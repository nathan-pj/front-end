import axios from "axios";
import { useEffect, useState } from "react";
export default function GetRecipientName() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const recipientId = window.location.href.split("-")[1];
    const fetchName = axios.create({
      baseURL: `https://property-backend-api.herokuapp.com/api/users`,
    });
    fetchName.get(recipientId).then((result) => {
      setUsername(result.data.user.username);
    }, []);
  });
  return <h1>Chat with {username}</h1>;
}
