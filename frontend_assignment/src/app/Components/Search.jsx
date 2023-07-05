"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search } from "react-feather";

const SearchUI = () => {
  return (
    <Link href='/search' className="flex-col flex justify-center items-center w-full text-gray-600">
      <div
        className={`flex justify-around items-center h-12 w-48 bg-zinc-100 rounded-md text-center text-xl cursor-pointer
        `}
      >
        <Search />
        <div className="font-semibold">Search</div>
        <div className="w-[30%] outline-1 border border-zinc-400 rounded-md">
          Ctrl K
        </div>
      </div>
    </Link>
  );
};

export default SearchUI;
