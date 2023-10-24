import React from "react";
import { UsersProvider } from "../contexts/UsersProvider";
import Content from "./Content";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="w-full h-full flex">
      <UsersProvider>
        <SideBar />
        <Content />
      </UsersProvider>
    </div>
  );
};

export default Body;
