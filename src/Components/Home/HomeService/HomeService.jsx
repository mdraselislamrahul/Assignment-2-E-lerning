import React, { useEffect } from "react";
import img1 from "./Image/3-1.png"
import img2 from "./Image/3-2.png"
import img3 from "./Image/3-3.png"
import img4 from "./Image/3-4.png"
import img5 from "./Image/3-5.png"
import img6 from "./Image/3-6.png"
import { Link } from "react-router-dom";
import Aos from "aos";

const HomeService = () => {
    useEffect(()=>{
        Aos.init()
    } ,[])
  return (
   <div className="px-10 mt-20">
    <div className="text-center">
        <h4 className="text-xl italic font-bold text-red-900">Our Service</h4>
        <h1 className="mt-3 text-4xl font-bold">What Restaurant Services</h1>
    </div>
     <div className="grid gap-5 mt-16 lg:grid-cols-3 md:grid-cols-2">
      {/* 1st card */}
      <div>
        <div
        data-aos="zoom-in-up"
         data-aos-duration="2000"
        className="w-full h-full shadow-xl card bg-base-300 hover:bg-red-900 hover:text-white hover:duration-1000">
          <figure className="px-10 pt-10">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body ">
            <h2 className="text-2xl card-title">Fresh Healthy Food</h2>
            <p className="mt-5 ">Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="mt-5 card-actions">
              <Link to="/service" className="font-bold underline">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd card */}
      <div>
      <div
        data-aos="zoom-in-up"
         data-aos-duration="2000"
        className="w-full h-full shadow-xl card bg-base-300 hover:bg-red-900 hover:text-white">
          <figure className="px-10 pt-10">
            <img
              src={img2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body ">
            <h2 className="text-2xl card-title">Delicious Homemade Dishes</h2>
            <p className="mt-5 ">Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="mt-5 card-actions">
              <Link to="/service" className="font-bold underline">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
      {/* 3th card */}
      <div>
      <div
        data-aos="zoom-in-up"
         data-aos-duration="2000"
        className="w-full h-full shadow-xl card bg-base-300 hover:bg-red-900 hover:text-white">
          <figure className="px-10 pt-10">
            <img
              src={img3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body ">
            <h2 className="text-2xl card-title">Gourmet Dining Experience</h2>
            <p className="mt-5 ">Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="mt-5 card-actions">
              <Link to="/service" className="font-bold underline">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
      {/* 4th card */}
      <div>
      <div
        data-aos="zoom-in-up"
         data-aos-duration="2000"
        className="w-full h-full shadow-xl card bg-base-300 hover:bg-red-900 hover:text-white ">
          <figure className="px-10 pt-10">
            <img
              src={img4}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body ">
            <h2 className="text-2xl card-title">Farm-to-Table Freshness</h2>
            <p className="mt-5 ">Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="mt-5 card-actions">
              <Link to="/service" className="font-bold underline">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
      {/* 5th card */}
      <div>
      <div
        data-aos="zoom-in-up"
         data-aos-duration="2000"
        className="w-full h-full shadow-xl card bg-base-300 hover:bg-red-900 hover:text-white">
          <figure className="px-10 pt-10">
            <img
              src={img5}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body ">
            <h2 className="text-2xl card-title">Mouthwatering Culinary</h2>
            <p className="mt-5 ">Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="mt-5 card-actions">
              <Link to="/service" className="font-bold underline">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
      {/* 6th card */}
      <div>
      <div
        data-aos="zoom-in-up"
         data-aos-duration="2000"
        className="w-full h-full shadow-xl card bg-base-300 hover:bg-red-900 hover:text-white">
          <figure className="px-10 pt-10">
            <img
              src={img6}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body ">
            <h2 className="text-2xl card-title">Exquisite Dessert Delights</h2>
            <p className="mt-5 ">Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className="mt-5 card-actions">
              <Link to="/service" className="font-bold underline">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default HomeService;
