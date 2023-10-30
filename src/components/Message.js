import React from "react";

const Message = ({ message, user, time, loggedInUser }) => {
  const currentUser = loggedInUser.name === user;
  return user === "Bot" ? (
    <div className=" md:p-2 p-1 md:m-2 m-1 md:my-4 shadow-lg flex self-center  bg-gray-600 md:whitespace-nowrap rounded-lg justify-center">
      <div className="flex flex-col ">
        <div className="md:text-sm text-[0.6rem] text-white text-bold">
          {message}
          <span className="text-white text-[0.8rem] mx-1 text-bold">
            {" "}
            {time}{" "}
          </span>{" "}
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`md:px-4 px-1 py-2 m-3 shadow-lg flex rounded-lg break-all	${
        !currentUser ? "bg-green-300 self-end" : "bg-gray-300 self-start"
      } `}
    >
      <div className="flex flex-col">
        <div className="text-blue-600 md:text-md  whitespace-nowrap">
          <span className="text-[0.9rem]"> {user}</span>{" "}
          <span className="text-gray-800 md:text-sm mx-1 !text-[0.8rem]">
            {time}
          </span>
        </div>
        <div className="md:text-[0.9rem] text-[0.7rem]">{message}</div>
      </div>
    </div>
  );
};

export default Message;
