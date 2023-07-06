import React from "react";
import { ShoppingBag } from "react-feather";
import Link from "next/link";

const ItemsCard = (props) => {
  return (
    <Link
      href={`/search/${props.id}`}
      key={props.id}
      className="flex flex-col p-5 m-5 h-[550px] justify-center w-[450px] space-y-5 bg-gray-700 rounded-lg items-center hover:bg-gray-500 border border-zinc-500"
    >
      <img className=" h-72 w-72 rounded-sm" src={props.img} alt="" />
      <div className=" font-bold text-xl text-center">{props.name}</div>
        <div className="text-xl text-gray-300">{props.category.toUpperCase()}</div>
      <div className="flex items-center space-x-5">
        <div className=" text-2xl font-bold">${props.price}</div>
        <div className="text-xl bg-blue-900 flex items-center justify-center space-x-4 cursor-pointer rounded p-5 text-center">
          <ShoppingBag className="text-white" />
          <div className=" self-center">Add to cart</div>
        </div>
      </div>
    </Link>
  );
};

export default ItemsCard;
