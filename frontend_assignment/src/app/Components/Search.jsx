"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search } from "react-feather";

const SearchUI = () => {
  return (
    <Link href='/search' className="flex-col flex justify-center items-center w-full text-gray600">
      <div
        className={`flex justify-center space-x-4 items-center h-12 w-48 bg-zinc-600 rounded-md text-center text-xl cursor-pointer
        `}
      >
        <Search />
        <div className="font-semibold">Search</div>
        
      </div>
    </Link>
  );
};

export default SearchUI;
