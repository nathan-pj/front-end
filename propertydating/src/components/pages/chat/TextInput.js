import { useEffect, useState, useRef } from "react";
export default function TextInput({
  messages,
  setMessages,
  room_id,
  username,
  socket,
}) {
  const [input, setInput] = useState("");
  const handleClick = (input, e) => {
    setMessages([...messages, { owner: 2, body: input, time: Date.now() }]);
    setInput("");
    scrollToBottom();

    e.preventDefault();
    const payload = {
      body: input,
      to: room_id,
      owner: username,
      chatName: room_id,
      date_time: Date.now(),
      isChannel: true,
    };

    socket.emit("send message", payload);
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    console.log(messagesEndRef.current);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-input">
      <input
        ref={messagesEndRef}
        type="text"
        placeholder="Message"
        className="chat-page__input-form"
        name="message"
        required
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />

      <button type="submit">
        <svg
          className="send-button  text-gray-500 origin-center transform rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="indigo"
          onClick={(e) => {
            handleClick(input, e);
          }}
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </button>
    </div>
  );
}
