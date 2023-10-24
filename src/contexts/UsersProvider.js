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

export const UsersContext = createContext();

export const useUsers = () => {
  return useContext(UsersContext);
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const addUser = (id, name, room) => {
    const user = { id, name, room };
    setLoggedInUser(user);
    let usersCopy = [...users];
    setUsers((users) => [...users, user]);

    return user;
  };
  return (
    <UsersContext.Provider value={{ users, addUser, loggedInUser }}>
      {children}
    </UsersContext.Provider>
  );
};
