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
    <div className="flex justify-between w-full h-full bg-blue-400">
      <div className="flex text-[2rem] text-white p-4 mx-8">ChatApp</div>
      <div className=" flex justify-center items-center p-4 text-white ">
        <button
          onClick={reset}
          className=" text-lg border border-solid p-2 rounded-lg shadow-lg"
        >
          {" "}
          Leave Room{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
