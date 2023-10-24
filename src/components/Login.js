import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { UsersContext } from "../contexts/UsersProvider";

const Login = () => {
  const nameRef = useRef(null);
  const roomRef = useRef(null);
  const navigate = useNavigate();
  const { users, createUsers } = useContext(UsersContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    const roomName = roomRef.current.value;
    const userName = nameRef.current.value;
    createUsers(1, userName, roomName);
    navigate("/chat");
  };
  return (
    <div>
      <form>
        <input ref={roomRef} type="text" name="room" placeholder="Enter room" />
        <input ref={nameRef} type="text" name="user" placeholder="Enter Name" />
        <button onClick={handleClick}>Join Room</button>
      </form>
    </div>
  );
};

export default Login;
