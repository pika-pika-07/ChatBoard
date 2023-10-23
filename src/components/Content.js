import React from "react";

const Content = () => {
  return (
    <div className="w-9/12 h-full border border-solid flex flex-col justify-between">
      <div className="h-5/12 ">
        <div>
          <p>
            Parth
            <span> Time - 9.07 am </span>
          </p>
        </div>
        <div>
          <p>
            Isha
            <span> Time - 9.10 am </span>
          </p>
        </div>
      </div>
      <div className="h-7/12 flex justify-between">
        <div className="border border-black w-11/12 p-5">Message Box</div>
        <div className="border border-black w-1/12 ">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
