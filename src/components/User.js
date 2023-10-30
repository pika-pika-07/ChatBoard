import React from "react";

const User = ({ user }) => {
  return (
    <li className="flex md:ml-3 ml-1 md:text-[0.9rem] text-[0.6rem] items-center break-all  ">
      <div className="my-1 ">{user.name}</div>

      <div className="ml-2">
        <span class="relative flex h-3 w-3 ">
          <span
            className={` absolute inline-flex h-full w-full rounded-full opacity-75 ${
              user.online ? "animate-ping bg-[#0fcc45]" : "bg-[#cc0f0f]"
            }`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              user.online ? "bg-[#0fcc45]" : "bg-[#cc0f0f]"
            }`}
          ></span>
        </span>
      </div>
    </li>
  );
};

export default User;
