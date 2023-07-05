"use client"

import { fetchItems } from "./lib/DataFetch";
import ItemsCard from "./Components/ItemsCard";
import { Loader } from "react-feather";
import { useQuery } from "react-query";

export default function Home() {
  const { data, status } = useQuery("items", fetchItems);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" size={50} />
      </div>
    );
  }

  return (
    <main className="">
      <div className="flex flex-wrap items-center justify-center">
        {data.map((item) => (
          <ItemsCard key={item.id} img={item.image} item={item} 
          name={item.title}/>
        ))}
        {status === "error" && <p>Error fetching data</p>}
       { console.log(data)}

      </div>
    </main>
  );
}
