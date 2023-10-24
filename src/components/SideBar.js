import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";
const SideBar = () => {
  // const { users, loggedInUser } = useContext(UsersContext);
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState(null);
  useEffect(() => {
    if (!socket) {
      return;
    } else {
      socket.on("roomUsers", ({ room, users }) => {
        setRoom(room);
        setUsers(users);
      });
    }

    return () => socket.off("roomUsers");
  }, [socket]);

  return (
    <div className="w-3/12 border border-r-8 h-full">
      <div>
        <h3> Room Name </h3>
      </div>
      <div>{room}</div>

      <div className="my-10">
        <h3> Users </h3>
        <ul className="my-5">
          {users.map((user) => {
            return <li> {user.name} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
