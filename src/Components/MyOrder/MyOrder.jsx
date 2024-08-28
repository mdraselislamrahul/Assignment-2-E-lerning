import React from "react";
import OrderBanner from "./OrderBanner/OrderBanner";
import { useLoaderData } from "react-router-dom";
import Order from "./OrderBanner/Order/Order";

const MyOrder = () => {
  const orderFood = useLoaderData();
  console.log(orderFood);
  return (
    <div>
      <OrderBanner></OrderBanner>
      <div className="flex items-center justify-between px-10 mt-20">
        <h3 className="w-full text-xl font-bold text-red-900">Image</h3>
        <h3 className="w-full text-xl font-bold text-red-900">Name</h3>
        <h3 className="w-full text-xl font-bold text-red-900">Catagory</h3>
        <h3 className="w-full text-xl font-bold text-red-900">Quntity</h3>
        <h3 className="w-full text-xl font-bold text-red-900">Delete</h3>
      </div>
      <div className="mt-10 ml-8">
        {
            orderFood.map(order=><Order order={order} key={order}></Order>)
        }
        </div>
    </div>
  );
};

export default MyOrder;
