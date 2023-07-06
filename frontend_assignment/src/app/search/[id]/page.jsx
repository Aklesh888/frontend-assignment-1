"use client";
import React from "react";
import { useQuery } from "react-query";
import { Loader, ShoppingBag } from "react-feather";
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
    <div className="flex flex-col justify-center items-center my-8">
      <div className="flex lg:flex-row flex-col justify-center">
        <img
          src={product.image}
          className=" md:h-[500px] md:w-[500px] h-auto w-auto m-5 rounded"
          alt=""
        />
        <div className="w-[600px] space-y-5 flex flex-col">
          <div className="md:text-4xl sm:text-2xl font-extrabold">
            {product.title}
          </div>
          <div className="my-2 md:text-xl text-sm font-semibold">
            Category: {product.category}
          </div>
          <div className="my-2 md:text-xl text-sm text-zinc-400">
            {product.description}
          </div>
          <div className="text-xl">Price: ${product.price}</div>
          <div className="text-xl bg-blue-900 flex items-center justify-center space-x-4 cursor-pointer rounded p-5 text-center">
            <ShoppingBag className="text-white" />
            <div className="">Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
