import React, { useState, useEffect } from "react";
import { Search, Delete, Filter } from "react-feather";
import { fetchItems } from "../lib/DataFetch";
import { useQuery } from "react-query";
import SearchResult from "./SearchResult";
import Help from "./Help";
import { Loader } from "react-feather";

const SearchPopup = () => {
  const { data, status } = useQuery("items", fetchItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setShowResults(false);
  }, [searchTerm]);

  if (status === "loading") {
    return <Loader className="animate-spin" color="white" size={40} />;
  }

  const handleOpacity = () => {
    if (searchTerm === "") {
      return 0.5;
    } else {
      return 1;
    }
  };

  const handleSearch = () => {
    setShowResults(true);
  };

  const filteredData = data.filter((item) => {
    const titleMatch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch =
      selectedCategory === "" || item.category === selectedCategory;
    const priceMatch =
      (minPrice === "" || item.price >= minPrice) &&
      (maxPrice === "" || item.price <= maxPrice);
    return titleMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="flex h-92 rounded-md w-[1200px] flex-col bg-white transition-all text-gray-700 m-10">
      <div
        className={`px-4 m-4 h-12 md:w-[65vw] w-[90vw] flex justify-between rounded border border-blue-400`}
      >
        <div className="flex justify-center items-center">
          <Search />
          <input
            className="px-5 lg:w-[45vw] md:w-[30vw] placeholder:text-xl placeholder:text-zinc-400 h-6 outline-none"
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="flex justify-center space-x-3 py-3">
          <div className="hidden items-end justify-end h-full pt-7 md:flex">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(event) => setMinPrice(event.target.value)}
              className="border border-gray-300 rounded-md p-1 focus:outline-none w-14"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              className="border border-gray-300 rounded-md p-1 focus:outline-none w-14"
            />
            
          </div>
          
          <Delete
            opacity={handleOpacity()}
            size={20}
            onClick={() => setSearchTerm("")}
          />
          <button
          className="rounded-full bg-gray-200 px-3"
          onClick={handleSearch}
        >
          Search
        </button>
        </div>
      </div>
      <div className="flex justify-center py-3">
        
      </div>
      {showResults && (
        <div className="flex flex-col w-auto space-y-3 px-5 py-3 overflow-auto">
          {filteredData.map((item) => (
            <div key={item.id}>
              <SearchResult
                title={item.title}
                price={item.price}
                category={item.category}
              />
            </div>
          ))}
        </div>
      )}
      <Help />
    </div>
  );
};

export default SearchPopup;
