import React from "react";
import {
    ArrowDown,
    ArrowUp,
    CornerDownLeft,
 
  } from "react-feather";
const Help = () => {
  return (
    <div className=" flex justify-start mx-8 my-10 space-x-3">
      <div className=" bg-zinc-100 rounded p-1">
        <ArrowDown />
      </div>
      <div className=" bg-zinc-100 rounded p-1">
        <ArrowUp />
      </div>
      <div className=" md:text-lg ">To Navigate</div>
      <div className=" bg-zinc-100 rounded p-1">
        <CornerDownLeft />
      </div>
      <div className="text-lg">to select</div>
      <div className="bg-zinc-100 rounded p-1 px-2 font-bold">esc</div>
      <div className="text-lg">to close</div>
    </div>
  );
};

export default Help;
