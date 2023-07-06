"use client"
import { useState } from "react";
import { fetchItems } from "./lib/DataFetch";
import ItemsCard from "./Components/ItemsCard";
import { Loader } from "react-feather";
import { useQuery } from "react-query";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data, status } = useQuery(["items", selectedCategory], () =>
    fetchItems(selectedCategory)
  );


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" size={50} />
      </div>
    );
  }


  const filteredData = data.filter((item) => {
    
    const categoryMatch =
      selectedCategory === "" || item.category === selectedCategory;

    return categoryMatch;
  });

  return (
    <main>
      <div className="flex justify-center mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border h-16 w-[400px] text-2xl border-gray-300 rounded-md p-2 focus:outline-none text-black m-5 justify-self-end"
        >
          <option value="">All Categories</option>
          <option value="mens clothing">Men's Clothing</option>
          <option value="womens clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelry">Jewelry</option>
        </select>
      </div>

      {status === "error" && <p>Error fetching data</p>}

      <div className="flex flex-wrap items-center justify-center">
        {filteredData.map((item) => (
          <ItemsCard
            key={item.id}
            id={item.id}
            img={item.image}
            item={item}
            name={item.title}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </main>
  );
}
