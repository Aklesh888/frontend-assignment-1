import React from "react";
import Link from "next/link";

const SearchResult = (props) => {
  return (
    <Link href={`/search/${props.id}`} className="flex flex-row text-gray-600 w-auto max-w-[800px]">
      <div className="flex px-10 bg-zinc-200 hover:bg-zinc-300 rounded-md h-32 w-full">
        <img src={props.image} className="h-20 w-20 mr-2 my-1 rounded-sm" alt="" />
        <div className="flex flex-col">

        <div className="text-xl font-bold">{props.title} </div>
        <div className="text-sm text-gray-500">${props.price}</div>
        <div className="">{props.category}</div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
