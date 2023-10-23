import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between border border-b-8 w-full">
      <div className="">ChatApp</div>
      <div className="border border-solid ">
        <button> Leave Room </button>
      </div>
    </div>
  );
};

export default Header;
