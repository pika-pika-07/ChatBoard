import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";

const Login = () => {
  const [errormessage, setErrorMessage] = useState(null);
  const { socket } = useContext(SocketContext);
  const nameRef = useRef(null);
  const roomRef = useRef(null);
  const navigate = useNavigate();
  const { addUser } = useContext(UsersContext);

  const handleClick = (e) => {
    e.preventDefault();
    const roomName = roomRef.current.value;
    const userName = nameRef.current.value;
    if (!roomName || !userName) {
      setErrorMessage("Room Name or User name cannot be empty");
      return;
    }

    const user = addUser(socket.id, userName, roomName);

    navigate(`/chat?username=${user.name}&room=${user.room}`, {
      state: user,
    });
  };
  return (
    <div>
      <form className="md:w-3/12 w-[80%] absolute p-12 bg-black  my-auto mx-auto top-60 right-0 left-0 text-white bg-opacity-80 shadow-lg">
        <h1 className="font-bold text-3xl py-4">Welcome to LiveChat</h1>
        <input
          ref={roomRef}
          type="text"
          placeholder="Enter Room Name"
          className="p-4 my-2 w-full bg-gray-100 text-black"
        />
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter User Name"
          className="p-4 my-2 w-full bg-gray-100 text-black"
        />
        {errormessage && (
          <p className="text-red-600 text-md py-2">{errormessage}</p>
        )}

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
