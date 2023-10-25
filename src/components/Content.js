import React, { useContext, useEffect, useState } from "react";
import { ConversationsContext } from "../contexts/ConversationProvider";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";
import Message from "./Message";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const { messages, createMessages } = useContext(ConversationsContext);
  const { loggedInUser } = useContext(UsersContext);
  const socket = useContext(SocketContext);
  const { users } = useContext(UsersContext);

  useEffect(() => {
    if (!socket) {
      return;
    } else {
      socket.on("recieveChatMessage", (data) => {
        debugger;
        createMessages(data);
      });
    }

    return () => socket.off("recieveChatMessage");
  }, [socket]);

  const handleMessageClick = () => {
    socket.emit("sendChatMessage", inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="w-9/12 h-full border border-solid flex flex-col justify-between">
      <div className="h-5/12 flex flex-col">
        {messages.map((message) => (
          <Message
            message={message.message}
            user={message.user}
            time={message.time}
            loggedInUser={loggedInUser}
          />
        ))}
      </div>
      <div className="h-7/12 flex justify-between">
        <div className="border border-black w-11/12 p-5">
          <input value={inputValue} onChange={handleInputChange} />
        </div>
        <div className="border border-black w-1/12 ">
          <button onClick={handleMessageClick}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
