import React from "react";

const SideBar = () => {
  return (
    <div className="w-3/12 border border-r-8 h-full">
      <div>
        <h3> Room Name </h3>
      </div>
      <div>Javascript</div>

      <div className="my-10">
        <h3> Users </h3>
        <ul className="my-5">
          <li> Parth </li>
          <li> Isha </li>
          <li> Random</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
