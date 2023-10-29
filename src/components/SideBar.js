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
              <li className="flex justify-center items-center">
                {user.name}
                <div className="ml-2">
                  <span class="relative flex h-3 w-3">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        user.online ? "bg-[#0fcc45]" : "bg-[#cc0f0f]"
                      }`}
                    ></span>
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${
                        user.online ? "bg-[#0fcc45]" : "bg-[#cc0f0f]"
                      }`}
                    ></span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
