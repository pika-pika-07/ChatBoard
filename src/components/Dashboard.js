import React, { useContext, useEffect } from "react";
import { UsersContext } from "../contexts/UsersProvider";
import Content from "./Content";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import { SocketContext } from "../contexts/SocketProvider";
import { ConversationsContext } from "../contexts/ConversationProvider";

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  const socket = useContext(SocketContext);
  const { messages, createMessages } = useContext(ConversationsContext);
  const location = useLocation();

  useEffect(() => {
    if (!socket) return;
    const user = location.state;
    socket.emit("join-room", { user });
  }, [location]);

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (data) => {
      createMessages(data);
    });

    return () => socket.off("message");
  }, [socket]);
  return (
    <div className="w-full h-full flex">
      <SideBar />
      <Content />
    </div>
  );
};

export default Dashboard;
