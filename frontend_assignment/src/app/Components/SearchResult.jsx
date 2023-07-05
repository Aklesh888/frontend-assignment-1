import React from "react";

const SearchResult = (props) => {
  return (
    <div className="flex flex-row text-gray-600 w-auto max-w-[800px]">
      <div className="flex flex-col px-10 bg-zinc-200 hover:bg-zinc-300 rounded-md h-32 w-full">
        <div className="text-xl font-bold">{props.title} </div>
        <div className="text-sm text-gray-500">${props.price}</div>
        <div className="">{props.category}</div>
      </div>
    </div>
  );
};

export default SearchResult;
