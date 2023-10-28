import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";

const Login = () => {
  const socket = useContext(SocketContext);
  const nameRef = useRef(null);
  const roomRef = useRef(null);
  const navigate = useNavigate();
  const { users, addUser } = useContext(UsersContext);

  const handleClick = (e) => {
    e.preventDefault();
    const roomName = roomRef.current.value;
    const userName = nameRef.current.value;
    const user = addUser(socket.id, userName, roomName);
    debugger;
    navigate(`/chat?username=${user.name}&room=${user.room}`, {
      state: user,
    });
  };
  return (
    <div>
      <form className="md:w-3/12 w-[80%] absolute p-12 bg-blue-400 my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Welcome to Chat</h1>
        <input
          ref={roomRef}
          type="text"
          placeholder="Enter Room Name"
          className="p-4 my-2 w-full bg-gray-100 text-black"
        />
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter Name"
          className="p-4 my-2 w-full bg-gray-100 text-black"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          Join Room
        </button>
      </form>
    </div>
  );
};

export default Login;
