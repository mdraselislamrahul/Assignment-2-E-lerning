import React, { useEffect } from "react";
import img1 from "./Image/app-1.png"
import img2 from "./Image/app-2.png"
import img3 from "./Image/play-store.png"
import img4 from "./Image/apple.png"
import Aos from "aos";

const Simple = () => {
    useEffect(()=>{
        Aos.init()
    } , [])
  return (
    <div className="py-10 mt-20 bg-red-100">
      <div className="items-center gap-10 px-10 md:flex">
        <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
         data-aos-duration="2000"
        className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-relaxed">
            Simple Way to Order Your Food Faster
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius-
            mod tempor incididunt ut labore et dolore magna aliqua. Q ipsum
            suspendisse ultrices gravida. Risus commodo viverra maeceas accumsan
            lacus vel facilisis
          </p>
          <div className="flex gap-5 mt-10">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>

        <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
         data-aos-duration="2000"
        className="flex gap-5 md:w-1/2">
        <img className="w-60" src={img1} alt="" />
        <img className="w-60" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Simple;
