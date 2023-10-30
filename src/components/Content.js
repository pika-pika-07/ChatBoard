import React, { useContext, useEffect, useRef, useState } from "react";
import { ConversationsContext } from "../contexts/ConversationProvider";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";
import Message from "./Message";

const Content = () => {
  const myref = useRef();
  const [inputValue, setInputValue] = useState("");
  const { messages, createMessages } = useContext(ConversationsContext);
  const { loggedInUser } = useContext(UsersContext);
  const { socket } = useContext(SocketContext);
  const { users } = useContext(UsersContext);

  useEffect(() => {
    if (!socket) {
      return;
    } else {
      socket.on("recieveChatMessage", (data) => {
        myref.current.scrollTop = myref.current.scrollHeight;

        createMessages(data);
      });
    }

    return () => socket.off("recieveChatMessage");
  }, [socket]);

  const handleMessageClick = () => {
    socket.emit("sendChatMessage", inputValue);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMessageClick();
    }
  };
  return (
    <div className=" h-[100%] w-10/12  flex flex-col  ">
      <div ref={myref} className="flex flex-col overflow-scroll h-[90%]">
        {messages.map((message) => (
          <Message
            message={message.message}
            user={message.user}
            time={message.time}
            loggedInUser={loggedInUser}
          />
        ))}
      </div>
      <div></div>
      <div className=" w-full flex justify-between items-center bg-blue-400 h-[10%] ">
        <div className=" w-full  rounded-lg">
          <input
            className="w-full outline-none p-2	rounded-lg shadow-lg"
            value={inputValue}
            placeholder="Enter message"
            onKeyUp={handleKeyPress}
            onChange={handleInputChange}
          />
        </div>
        <div className=" w-1/12 px-3 rounded-lg flex justify-between items-center ">
          <button onClick={handleMessageClick}>
            <i class="fa-regular fa-paper-plane fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
