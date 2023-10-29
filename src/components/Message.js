import React from "react";

const Message = ({ message, user, time, loggedInUser }) => {
  const currentUser = loggedInUser.name === user;
  return user === "Bot" ? (
    <div className=" p-2 m-2 shadow-lg flex self-center  bg-gray-200 whitespace-nowrap rounded-lg justify-center">
      <div className="flex flex-col ">
        <div className="text-sm ">
          {message}
          <span className="text-gray-95000 text-xs mx-1"> {time} </span>{" "}
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`px-4 py-4 m-3 my-5 shadow-lg flex  rounded-lg break-all	${
        !currentUser ? "bg-green-300 self-end" : "bg-gray-300 self-start"
      } `}
    >
      <div className="flex flex-col">
        <div className="text-blue-400 text-md whitespace-nowrap">
          {user} <span className="text-gray-500 text-sm mx-1 "> {time} </span>
        </div>
        <div className="text-[16px]">{message}</div>
      </div>
    </div>
  );
};

export default Message;
