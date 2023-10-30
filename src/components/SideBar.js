import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";
const SideBar = () => {
  const { loggedInUser } = useContext(UsersContext);
  const { socket } = useContext(SocketContext);

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
    <div className="w-[20%] h-full overflow-scroll bg-black">
      <div className="flex text-white text-md items-center my-4 ml-4">
        <i class="fa-brands fa-rocketchat fa-beat fa-lg"></i>
        <h3 className="ml-3"> Room Name </h3>
      </div>
      <div className="flex text-white text-md  p-2 rounded-lg shadow-lg mx-2 bg-[#143138]">
        <span className="ml-3 ">{room}</span>
      </div>

      <div className="flex text-white text-mditems-center my-4 ml-4">
        <i class="fa-solid fa-user fa-lg"></i>{" "}
        <h3 className="ml-3"> Current User </h3>
      </div>
      <div className="flex text-white text-md  bg-[#143138] p-2 mx-2 rounded-lg shadow-lg  ">
        <span className="ml-3 capitalize break-all">{loggedInUser?.name}</span>
        <span class="relative flex h-3 w-3 self-center ml-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#143138] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-[#0fcc45]"></span>
        </span>
      </div>

      <div className="my-10">
        <h3 className="flex text-white text-md ml-4 my-5 items-center">
          {" "}
          <i class="fa-solid fa-user fa-lg"></i>{" "}
          <span className="ml-3"> Other Users </span>
        </h3>

        <ul className=" flex text-white text-md mx-2 p-1 my-5 flex-col capitalize bg-[#143138] rounded-lg shadow-lg">
          {users.map((user) => {
            if (user.name !== loggedInUser?.name) {
              return (
                <li className="flex ml-3 items-center break-all  ">
                  <div className="my-1 ">{user.name}</div>

                  <div className="ml-2">
                    <span class="relative flex h-3 w-3 ">
                      <span
                        className={` absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          user.online
                            ? "animate-ping bg-[#0fcc45]"
                            : "bg-[#cc0f0f]"
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
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
