import React, { createContext, useContext, useState } from "react";

export const ConversationsContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const createMessages = (newMessage) => {
    setMessages((message) => [...message, newMessage]);
  };
  return (
    <ConversationsContext.Provider value={{ messages, createMessages }}>
      {children}
    </ConversationsContext.Provider>
  );
};
