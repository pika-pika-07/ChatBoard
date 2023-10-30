import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketProvider";
import { UsersContext } from "../contexts/UsersProvider";
import User from "./User";
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
    <div className="md:w-[20%] h-full overflow-scroll bg-black">
      {/* Room Section */}
      <div>
        <div className="flex text-white md:text-[1rem] text-[0.6rem] items-center my-4 md:ml-4 ml-2">
          <i class="fa-brands fa-rocketchat fa-beat md:fa-lg fa-sm"></i>
          <h3 className="md:ml-3 ml-1"> Room Name </h3>
        </div>
        <div className="flex text-white  md:text-[0.9rem] text-[0.6rem]  p-2 rounded-lg shadow-lg mx-2 bg-[#143138]">
          <span className="md:ml-3 ml-1">{room}</span>
        </div>
      </div>
      {/* // Current User */}
      <div className="my-8">
        <div className="flex text-white  md:text-[1rem] text-[0.6rem] items-center my-4 md:ml-4 ml-2">
          <i class="fa-solid fa-user md:fa-lg fa-sm"></i>{" "}
          <h3 className="md:ml-3 ml-1"> Current User </h3>
        </div>
        <div className="flex text-white  md:text-[0.9rem] text-[0.6rem]  bg-[#143138] p-2 mx-2 rounded-lg shadow-lg  ">
          <span className="md:ml-3 ml-1 capitalize break-all">
            {loggedInUser?.name}
          </span>
          <span class="relative flex md:h-3 md:w-3 h-2 w-2 self-center ml-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#143138] opacity-75"></span>
            <span class="relative inline-flex rounded-full md:h-3 md:w-3 h-2 w-2 bg-[#0fcc45]"></span>
          </span>
        </div>
      </div>
      {/* // Other Users Section */}
      <div className="my-8">
        <h3 className="flex text-white  md:text-[1rem] text-[0.6rem] md:ml-4 ml-2 my-5 items-center">
          {" "}
          <i class="fa-solid fa-user md:fa-lg fa-sm"></i>{" "}
          <span className="md:ml-3 ml-1"> Other Users </span>
        </h3>

        <ul
          className={`flex text-white md:text-[1rem] text-[0.6rem] md:mx-2 mx-1 p-1 my-5 flex-col capitalize  ${
            users.length > 1 ? " bg-[#143138] rounded-lg shadow-lg" : ""
          }`}
        >
          {users.map((user) => {
            if (user.name !== loggedInUser?.name) {
              return <User user={user} />;
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
