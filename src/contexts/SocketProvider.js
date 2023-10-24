import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("http://localhost:5600");
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
