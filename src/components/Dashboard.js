import React, { useContext, useEffect } from "react";
import { UsersContext } from "../contexts/UsersProvider";
import Content from "./Content";
import SideBar from "./SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../contexts/SocketProvider";
import { ConversationsContext } from "../contexts/ConversationProvider";
import Header from "./Header";

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  const socket = useContext(SocketContext);
  const { messages, createMessages } = useContext(ConversationsContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!socket) return;
    const user = location.state;
    debugger;
    if (!user) {
      navigate("/");
    } else {
      socket.emit("join-room", { user });
    }
  }, [location]);

  useEffect(() => {
    if (!socket) return;
    socket.on("welcomeMessage", (data) => {
      createMessages(data);
    });

    return () => socket.off("welcomeMessage");
  }, [socket]);
  return (
    <div className="w-full h-full flex flex-col border border-black">
      <div className="h-[10%]">
        <Header />
      </div>

      <div className="flex w-full h-[90%]">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
