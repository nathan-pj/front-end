import chatDummy from "./chatDummy";
import TextInput from "./TextInput";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { io } from "socket.io-client";
import { useParams, Link } from "react-router-dom";
import GetRecipientName from "./GetRecipientName";
export default function ChatPage() {
  const [messages, setMessages] = useState(chatDummy.messages);
  const userLoggedIn = 2;
  const socket = io("https://property-backend-api.herokuapp.com/");

  const { room_id } = useParams();

  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [users, SetUsers] = useState([]);
  const [messageFromServer, setMessageFromServer] = useState([]);
  const [userLeft, setUserLeft] = useState(false);
  const { user } = useAuth0();
  useEffect(() => {
    //let user = prompt("Please enter your username");
    setUserId(user.sub);

    /*    const toAndFromIds = room_id.split("-"); */

    setUsername(user.name);

    // client-side
    socket.on("connect", () => {
      // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.emit("join room", {
      username: user.name,
      userId: user.sub,
      to: room_id,
    });

    socket.on("user joined", (msg) => {
      setMessageFromServer([msg]);
    });
    socket.on("new user", (users) => {
      const messagesTosHOW = JSON.parse(users.messages);
      setMessageFromServer([messagesTosHOW[0].messages]);
      SetUsers(users.users);
    });

    socket.on("new message", (message) => {
      console.log("message receve from serever");
      setMessageFromServer([
        {
          owner: message.owner,
          body: message.body,
          date_time: message.date_time,
          to: message.to,
        },
      ]);
      setUserId(message.owner);
      console.log(message.owner);
    });

    socket.on("user left", (msg) => {
      setMessageFromServer([msg]);
    });
  }, []);
  useEffect(() => {
    if (
      messageFromServer.length > 0 &&
      Object.keys(messageFromServer[0]).length !== 0
    ) {
      setAllMessages([...allMessages, ...messageFromServer].flat());
    }
  }, [messageFromServer]);
  const formatDates = (date) => {
    if (typeof date === "string") {
      return date;
    } else {
      const newDate = new Date(date).toLocaleTimeString("en-US");
      return `${newDate}`;
    }
  };

  return (
    <div className="chat-page">
      <GetRecipientName />

      <div className="chat-page__screen">
        {allMessages.length === 0
          ? null
          : allMessages.map((message, key) => {
              if (message.owner === "muffin ninjas") {
                return (
                  <>
                    <p className="userDate">{formatDates(message.date_time)}</p>

                    <div
                      key={`message-${key}`}
                      className="chat-page__screen__user-bubble userMessage"
                    >
                      <p>{message.body}</p>
                    </div>
                  </>
                );
              } else if (message.owner === "Chat Bot") {
                return (
                  <div className="" key={`message-${key}`}>
                    <p>{formatDates(message.date_time)}</p>
                    <h3>{message.owner}</h3>
                    <p>{message.body}</p>
                  </div>
                );
              } else {
                return (
                  <>
                    <p>{formatDates(message.date_time)}</p>

                    <div
                      key={`message-${key}`}
                      className="chat-page__screen__recipient-bubble recipientMessage"
                    >
                      <p>{message.body}</p>
                    </div>
                  </>
                );
              }
            })}

        {/* {messages.map((chat, i) => {
          if (chat.owner === userLoggedIn) {
            return (
              <div className="chat-page__screen__user-bubble">
                <p className="userMessage" key={`message_${i}`}>
                  {chat.body}
                </p>
              </div>
            );
          } else {
            return (
              <div className="chat-page__screen__recipient-bubble">
                <p className="recipientMessage" key={`message_${i}`}>
                  {chat.body}
                </p>
              </div>
            );
          }

        })} */}
      </div>
      <div className="chat-page__type-bubble">
        <TextInput
          messages={messages}
          setMessages={setMessages}
          room_id={room_id}
          username={username}
          socket={socket}
        />
      </div>
    </div>
  );
}
