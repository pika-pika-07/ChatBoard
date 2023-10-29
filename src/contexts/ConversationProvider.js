import React, { createContext, useContext, useState } from "react";

export const ConversationsContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const createMessages = (newMessage) => {
    setMessages((message) => [...message, newMessage]);
  };

  const resetMessages = () => {
    setMessages([]);
  };
  return (
    <ConversationsContext.Provider
      value={{ messages, createMessages, resetMessages }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};
