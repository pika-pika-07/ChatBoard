import React from "react";
import { UsersProvider } from "../contexts/UsersProvider";
import Content from "./Content";
import SideBar from "./SideBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/chat",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="w-full h-full flex">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
