import React from "react";

const Message = ({ message, user, time, loggedInUser }) => {
  return (
    <div className="border border-black p-5 m-5 shadow-lg flex justify-between">
      <div className="font-bold">{message}</div>
      {loggedInUser.name === user && <div>Same User</div>}
      <div className="text-sm">{user}</div>
    </div>
  );
};

export default Message;
