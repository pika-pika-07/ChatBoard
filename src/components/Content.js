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
    if (e.key === "Enter" && inputValue.length) {
      handleMessageClick();
    }
  };
  return (
    <div className=" h-[100%] md:w-[80%] w-[65%]  flex flex-col  ">
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
      <div className="w-full flex justify-between items-center bg-black h-[10%] ">
        <div className=" w-full  rounded-lg">
          <input
            className="w-full outline-none md:p-2 p-0.5 md:mb-0 mb-2 rounded-lg shadow-lg md:text-[1rem] text-[0.6rem]"
            value={inputValue}
            placeholder="Enter message"
            onKeyUp={handleKeyPress}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-1/12 px-3 rounded-lg flex justify-between items-center ">
          <button onClick={handleMessageClick}>
            <i className="fa-regular fa-paper-plane md:fa-lg md:text-lg fa-sm text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
