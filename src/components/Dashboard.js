import React, { useContext, useEffect } from "react";
import { UsersContext } from "../contexts/UsersProvider";
import Content from "./Content";
import SideBar from "./SideBar";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SocketContext } from "../contexts/SocketProvider";
import { ConversationsContext } from "../contexts/ConversationProvider";
import Header from "./Header";

const Dashboard = () => {
  const { loggedInUser, addUser } = useContext(UsersContext);
  const { socket } = useContext(SocketContext);
  const { messages, createMessages } = useContext(ConversationsContext);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const username = searchParams.get("username");
  const room = searchParams.get("room");

  useEffect(() => {
    if (!socket) return;
    if (!loggedInUser) {
      if (username && room) {
        const user = addUser(socket.id, username, room);
        socket.emit("join-room", { user: user });
      } else {
        navigate("/");
      }
    } else {
      socket.emit("join-room", { user: loggedInUser });
    }
  }, [location, socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on("welcomeMessage", (data) => {
      createMessages(data);
    });

    return () => socket.off("welcomeMessage");
  }, [socket]);
  return (
    <div className="w-full h-full flex flex-col border shadow-lg relative">
      <div className="flex w-full h-[10%]">
        <Header className="" />
      </div>

      <div className="flex w-full h-[90%]">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
