import React, { useRef, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import AllFoodsBanner from "./AllFoodsBanner/AllFoodsBanner";
import Food from "./Food/Food";
import "./index.css";

const AllFoods = () => {
  const allFoods = useLoaderData();
  // console.log(allFoods)
  const [foods, setFoots] = useState(allFoods);
  const searchRef = useRef();
  const [data, setdata] = useState(allFoods);

  const handleRoutFood = (filter) => {
    if (filter === "all") {
      setdata(allFoods);
    } else if (filter === "Vegetarian") {
      const vegetarianfood = allFoods.filter(
        (food) => food.Category === "Vegetarian"
      );
      setdata(vegetarianfood);
    } else if (filter === "Redcrab") {
      const redcrabfood = allFoods.filter(
        (food) => food.Category === "Redcrab"
      );
      setdata(redcrabfood);
    } else if (filter === "Shrimps") {
      const shrimpsfood = allFoods.filter(
        (food) => food.Category === "Shrimps"
      );
      setdata(shrimpsfood);
    } else if (filter === "Lobster") {
      const lobsterfood = allFoods.filter(
        (food) => food.Category === "Lobster"
      );
      setdata(lobsterfood);
    }
  };
  const handleSearch = () => {
    console.log(searchRef.current.value);
    const search = allFoods.filter((e, idx) =>
      e.Name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    console.log(search);
    setdata([...search]);
    if (searchRef.current.value.length < 1) {
      setdata([...allFoods]);
    }
  };
  return (
    <div>
      <AllFoodsBanner></AllFoodsBanner>
      <div className="items-center px-10 mt-10 lg:justify-between lg:flex">
        <div className="catagory lg:w-1\2">
          <ul>
            <li onClick={() => handleRoutFood("all")}>
              <a>All Foods</a>
            </li>
            <li onClick={() => handleRoutFood("Vegetarian")}>
              <a>Vegetarian</a>
            </li>
            <li onClick={() => handleRoutFood("Redcrab")}>
              <a>Redcrab</a>
            </li>
            <li onClick={() => handleRoutFood("Shrimps")}>
              <a>Shrimps</a>
            </li>
            <li onClick={() => handleRoutFood("Lobster")}>
              <a>Lobster</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-3 md:mt-5 lg:w-1/2">
          <input
            ref={searchRef}
            placeholder="Type Food Name"
            className="w-1/2 px-5 border border-red-900 rounded-md h-14"
            type="text"
          />
          <button
            onClick={handleSearch}
            className="px-2 py-4 text-white bg-red-900 rounded-md md:px-5"
          >
            Search Here
          </button>
        </div>
      </div>
      <div className="grid gap-5 px-10 mt-20 md:grid-cols-2 lg:grid-cols-3">
        {data.map((food) => (
          <Food food={food} foods={foods} setFoots={setFoots} key={food.id}></Food>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
