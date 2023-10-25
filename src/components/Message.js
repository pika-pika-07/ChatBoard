import React from "react";

const Message = ({ message, user, time, loggedInUser }) => {
  return user === "Bot" ? (
    <div className=" p-2 m-2 shadow-lg flex self-center w-5/12 ">
      <div className="flex justify-center items-center w-full">
        <div className="font-bold">{message}</div>
        <div className="text-sm">{user}</div>
      </div>
    </div>
  ) : user === loggedInUser.name ? (
    <div
      className="border border-black p-5 m-5 shadow-lg flex self-start w-5/12
     bg-pink-100"
    >
      <div className="font-bold">{message}</div>
      <div className="text-sm">{user}</div>
    </div>
  ) : (
    <div className="border border-black p-5 m-5 shadow-lg flex self-end w-5/12 bg-green-100">
      <div className="font-bold">{message}</div>
      <div className="text-sm">{user}</div>
    </div>
  );
};

export default Message;
