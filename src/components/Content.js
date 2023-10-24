import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketProvider";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useContext(SocketContext);
  useEffect(() => {
    if (!socket) {
      return;
    } else {
      socket.on("receieve", (data) => {
        setMessages((messages) => {
          return [...messages, data];
        });
      });
    }

    return () => socket.off("receieve");
  }, [socket]);

  const handleMessageClick = () => {
    socket.emit("sendMessage", inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="w-9/12 h-full border border-solid flex flex-col justify-between">
      <div className="h-5/12 ">
        {messages.map((message) => message)}
        <div>
          <p>
            Parth
            <span> Time - 9.07 am </span>
          </p>
        </div>
        <div>
          <p>
            Isha
            <span> Time - 9.10 am </span>
          </p>
        </div>
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
