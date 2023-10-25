import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between   w-full h-full bg-blue-400">
      <div className="flex text-[2rem] text-white p-4 mx-8">ChatApp</div>
      <div className=" flex justify-center items-center p-4 text-white ">
        <Link to="/">
          <button className=" text-lg border border-solid p-2 rounded-lg">
            {" "}
            Leave Room{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
