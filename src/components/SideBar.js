import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";
const SideBar = () => {
  const { loggedInUser } = useContext(UsersContext);
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

  useEffect(() => {
    const handleFocus = () => {
      socket.emit("online", loggedInUser);
    };

    const handleBlur = () => {
      if (loggedInUser && socket) {
        socket.emit("offline", loggedInUser);
      }
    };
    const check = () => {
      if (document.visibilityState === "visible") {
        handleFocus();
      } else {
        handleBlur();
      }
    };
    document.addEventListener("visibilitychange", check);

    return () => {
      document.removeEventListener("visibilitychange", check);
    };
  }, [loggedInUser]);

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
            return (
              <li>
                {user.name}
                {user.online ? "Online" : "offline"}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
