import React, { createContext, useContext, useState } from "react";

const defaultusers = [
  {
    id: 1,
    name: "Parth",
    room: "JS",
  },
  {
    id: 2,
    name: "Isha",
    room: "JS",
  },
];

export const UsersContext = createContext(defaultusers);

export const useUsers = () => {
  return useContext(UsersContext);
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(defaultusers);

  const createUsers = (id, name, room) => {
    setUsers((users) => {
      return [...users, { id, name, room }];
    });
  };
  return (
    <UsersContext.Provider value={{ users, createUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
