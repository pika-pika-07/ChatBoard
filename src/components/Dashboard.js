import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex">
      <SideBar />
      <Content />
    </div>
  );
};

export default Dashboard;
