import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
export const SocketContext = createContext();
const URL =
  process.env.NODE_ENV === "production"
    ? "https://chat-server-qgnm.onrender.com"
    : "http://localhost:5600";

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  const createSocketConnection = () => {
    const newSocket = io(URL);
    newSocket.on("connect", () => {
      setSocket(newSocket);
    });
  };

  useEffect(() => {
    const newSocket = io(URL);
    newSocket.on("connect", () => {
      setSocket(newSocket);
    });

    return () => newSocket.close();
  }, []);
  return (
    <SocketContext.Provider value={{ socket, createSocketConnection }}>
      {children}
    </SocketContext.Provider>
  );
};
