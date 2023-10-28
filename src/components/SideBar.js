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
    <div className="w-2/12 h-full overflow-scroll bg-blue-400">
      <div className="flex text-white text-lg justify-center my-5">
        <h3> Room Name </h3>
      </div>
      <div className="flex text-white text-lg justify-center  bg-blue-500	">
        {room}
      </div>

      <div className="my-10">
        <h3 className="flex text-white text-lg justify-center my-5 ">
          {" "}
          Users{" "}
        </h3>
        <ul className=" flex text-white text-lg justify-center  items-center my-5 flex-col">
          {users.map((user) => {
            debugger;
            return (
              <li>
                {user.name}d{user.id === socket.id ? "Online" : "offline"}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
