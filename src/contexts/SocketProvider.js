import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  const createSocketConnection = () => {
    const newSocket = io("http://localhost:5600");
    newSocket.on("connect", () => {
      setSocket(newSocket);
    });
  };

  useEffect(() => {
    const newSocket = io("http://localhost:5600");
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
