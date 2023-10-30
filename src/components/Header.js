import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConversationsContext } from "../contexts/ConversationProvider";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";

const Header = () => {
  const { socket, createSocketConnection } = useContext(SocketContext);
  const { loggedInUser } = useContext(UsersContext);
  const { resetMessages } = useContext(ConversationsContext);
  const navigate = useNavigate();
  const reset = () => {
    resetMessages();
    socket.disconnect();
    createSocketConnection();
    navigate("/");
  };
  return (
    <div className="flex justify-between w-full h-full bg-black">
      <div className="flex md:text-[2rem] text-[0.7rem] md:my-0 my-4 text-white md:p-4 p-0 mx-8">
        ChatApp
      </div>
      <div className=" flex justify-center items-center p-4 text-white ">
        <button
          onClick={reset}
          className=" md:text-lg text-[0.7rem] border border-solid md:p-2 p-1 rounded-lg shadow-lg"
        >
          {" "}
          Leave Room{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
