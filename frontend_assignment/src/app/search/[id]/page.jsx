"use client";
import React from "react";
import { useQuery } from "react-query";
import { Loader } from "react-feather";
import { singleProductFetch } from "@/app/lib/SingleProductFetch";

const SearchResult = (props) => {
  const { data: product, status } = useQuery(
    ["singleProduct", props.params.id],
    () => singleProductFetch(props.params.id)
  );

  if (status === "loading") {
    return <Loader className="animate-spin" />;
  }

  console.log(product);
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div className="md:text-3xl sm:text-2xl">{product.title}</div>
      <img
        src={product.image}
        className=" md:h-96 md:w-80 h-60 w-48 m-5 rounded"
        alt=""
      />
      <div className="">Description:</div>
      <div className="lg:w-1/3 m-5 md:text-xl text-sm">{product.description}</div>
    </div>
  );
};

export default SearchResult;
